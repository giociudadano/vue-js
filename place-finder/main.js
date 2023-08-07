/*
  Name: main.js
  Author: Gio Ciudadano
  Description:
    App functionality for Place Finder, a website that allows users to search for a place on Google Maps with options
    to narrow down results to the nearest province, municipality, or barangay.
*/

const appToMount = Vue.createApp({
  data() {
    return {
      // Defines the items displayed in the selectors. Modified when the app mounts and when the selector value changes.
      regions: {
        provinces: [],
        municipalities: [],
        barangays: []
      },
      suggestions: [],
      // Defines the loading state of the selectors. Modified when attempting to retrieve a list of items.
      // Displays a loading circle in the selector while TRUE.
      isLoading: {
        provinceSelector: false,
        municipalitySelector: false,
        barangaySelector: false,
        search: false
      },
      // Defines the value of the selectors. Modified when the selector value changes.
      // Used in GET requests to the API endpoint.
      selected: {
        province: null,
        municipality: null,
        barangay: null,
        place: null
      },
      searchText: null,
      // Defines what columns are displayed to the user. Search and map columns are hidden when the province and municipality are unselected.
      // Map column is hidden when no place is selected.
      viewStates: {
        search: false,
        placeMap: false
      }
    };
  },
  // Concatenates the currently selected placeID for the Google Maps Place GET request.
  computed: {
    googleMapsEmbedLink() {
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBDZjCJVC5mbasLkCXqVPBEFE06YSI0Eco&q=place_id:${this.selected.place}`;
    }
  },
  async mounted() {
    // When the app is mounted, fetch a list of provinces from an external API and modify
    // the province selector using the retrieved list.
    let provinceSelector = document.getElementById('select-province');
    let errorHandler = document.getElementById('error-handler');
    this.regions.provinces = await new Promise(async (resolve, reject) => {
      this.isLoading.provinceSelector = true;
      let response = await axios
        .get('http://localhost:5000/api/getRegions')
        .catch(reject);
      if (response) {
        provinceSelector.removeAttribute('disabled');
        resolve(response.data.data);
      } else reject;
    })
      .catch(error => {
        errorHandler.innerText = error.toString();
      })
      .finally(() => {
        this.isLoading.provinceSelector = false;
      });
  },
  methods: {
    // When the value of the province selector changes, fetch a list of municipalities from that province
    // and modify the municipality selector using the retrieved list.
    async onProvinceChange(event) {
      // Reset all input fields and hide the search and map columns.
      let municipalitySelector = document.getElementById('select-municipality');
      municipalitySelector.setAttribute('disabled', '');
      municipalitySelector.value = 'Select municipality';

      let barangaySelector = document.getElementById('select-barangay');
      barangaySelector.setAttribute('disabled', '');
      barangaySelector.value = 'Select barangay';

      this.viewStates.search = false;
      this.viewStates.placeMap = false;

      this.searchText = null;
      this.suggestions = [];

      // Send an API GET request that returns the list of provinces.
      let province = event.target.value;
      if (province != 'Select province') {
        this.selected.province = province;
        this.regions.municipalities = await new Promise(
          async (resolve, reject) => {
            this.isLoading.municipalitySelector = true;
            let response = await axios
              .get(`http://localhost:5000/api/getRegions?province=${province}`)
              .catch(reject);
            if (response) {
              municipalitySelector.removeAttribute('disabled');
              resolve(response.data.data);
            } else reject;
          }
        )
          .catch(error => {
            errorHandler.innerText = error.toString();
          })
          .finally(() => {
            this.isLoading.municipalitySelector = false;
          });
      }
    },

    // When the value of the municipality selector changes, fetch a list of municipalities from that province and
    // modify the municipality selector using the retrieved list.
    async onMunicipalityChange(event) {
      // Reset the barangay input field.
      let barangaySelector = document.getElementById('select-barangay');
      barangaySelector.setAttribute('disabled', '');
      barangaySelector.value = 'Select barangay';

      // Send an API GET request that returns the list of municipalities from the active province.
      // Refresh the suggestions list using the new municipality parameter with the same search text.
      let municipality = event.target.value;
      if (municipality != 'Select municipality') {
        this.selected.municipality = municipality;
        this.viewStates.search = true;
        this.refreshSuggestions();
        this.regions.barangays = await new Promise(async (resolve, reject) => {
          this.isLoading.barangaySelector = true;
          let response = await axios
            .get(
              `http://localhost:5000/api/getRegions?province=${this.selected.province}&municipality=${municipality}`
            )
            .catch(reject);
          if (response) {
            barangaySelector.removeAttribute('disabled');
            resolve(response.data.data);
          } else reject;
        })
          .catch(error => {
            errorHandler.innerText = error.toString();
          })
          .finally(() => {
            this.isLoading.barangaySelector = false;
          });
      } else {
        // If the municipality selector selects an invalid municipality, reset all input fields and hide the search and map columns.
        this.selected.municipality = null;
        this.selected.barangay = null;
        this.viewStates.search = false;
        this.viewStates.placeMap = false;
        this.searchText = null;
        this.suggestions = [];
      }
    },

    // When the barangay selector changes, refresh the suggestions list using the new barangay parameter with the same search text.
    // If the barangay selector selects an invalid barangay, reset the barangay input field.
    async onBarangayChange(event) {
      let barangay = event.target.value;
      if (barangay != 'Select barangay') {
        this.selected.barangay = barangay;
        this.refreshSuggestions();
      } else {
        this.selected.barangay = null;
      }
    },

    // When conducting a search, refresh the suggestions list using the new search text.
    onSearchChange(event) {
      this.searchText = event.target.value;
      this.refreshSuggestions();
    },

    // When refreshing the suggestions list, fetch a list of places using the region parameters and display the items to the user.
    async refreshSuggestions() {
      if (this.searchText) {
        // If an item was previous selected, unselect that item and hide the map.
        let activeSuggestion = document.querySelector('.suggestion-selected');
        if (activeSuggestion) {
          activeSuggestion.classList.remove('suggestion-selected');
        }
        this.viewStates.placeMap = false;

        this.suggestions = await new Promise(async (resolve, reject) => {
          this.isLoading.search = true;
          let response = await axios
            .get(
              `http://localhost:8080/maps-autocomplete?searchText=${this.searchText}&province=${this.selected.province}&municipality=${this.selected.municipality}&barangay=${this.selected.barangay}`
            )
            .catch(reject);
          if (response) {
            resolve(response.data);
          } else reject;
        })
          .catch(error => {
            errorHandler.innerText = error.toString();
          })
          .finally(() => {
            this.isLoading.search = false;
          });
      }
    },

    // When selecting an item from the suggestions list, display a map of that place.
    onSelectSuggestion(event) {
      let selectedSuggestion = event.currentTarget;
      if (selectedSuggestion.classList.contains('suggestion-selected')) {
        // If a selected item is selected again, unselect that item and hide the map.
        selectedSuggestion.classList.remove('suggestion-selected');
        this.viewStates.placeMap = false;
      } else {
        // If an unselected item is selected, remove all previously selected items.
        let activeSuggestion = document.querySelector('.suggestion-selected');
        if (activeSuggestion) {
          activeSuggestion.classList.remove('suggestion-selected');
        }
        selectedSuggestion.classList.add('suggestion-selected');
        this.selected.place =
          selectedSuggestion.querySelector('.placeID').innerText;
        this.viewStates.placeMap = true;
      }
    }
  }
});
