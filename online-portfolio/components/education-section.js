appToMount.component('education-section', {
  template:
    /*html*/
    `<div class="column is-full" id="education">
    <p class="text-header-2">{{sectionName}}</p>
    <div class="columns is-mobile education-card margin-narrow" v-for="educationCard in educationCards">
      <div class="column is-3">
        <img :src="educationCard.logoLink" />
      </div>
      <div class="column is-8">
        <p class="title">{{educationCard.title}}</p>
        <p class="subtitle">{{educationCard.subtitle}}</p>
        <p class="description">{{educationCard.line1}}</p>
        <p class="description">{{educationCard.line2}}</p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      sectionName: 'Education',
      educationCards: [
        {
          logoLink: './assets/school-upv.png',
          title: 'University of the Philippines',
          subtitle: 'Bachelor of Science in Computer Science',
          line1: 'Graduating in May 2024',
          line2: '2020 - 2024'
        },
        {
          logoLink: './assets/school-up.png',
          title: 'University of the Philippines High School in Iloilo',
          subtitle: 'Accountancy, Business, and Management',
          line1: 'With Honors',
          line2: '2018 - 2020'
        },
        {
          logoLink: './assets/school-sstc.png',
          title: 'Capiz National High School',
          subtitle: 'Special Science and Technology Class',
          line1: 'With Honors',
          line2: '2014 - 2018'
        }
      ]
    };
  }
});
