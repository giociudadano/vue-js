appToMount.component('navigation-bar', {
  template:
    /*html*/
    `      
    <nav class="navbar is-fixed-top is-black-3" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item no-padding-h" :href="titleLink">
          <img :src="iconPath" height="32" />
          <p class="text-website-name">{{title}}</p>
        </a>
      </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" v-on:click="scrollToSection('about-me')">Home</a>
        <a class="navbar-item" v-on:click="scrollToSection('projects')">Projects</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" v-on:click="scrollToSection('experience')">Experience</a>
            <a class="navbar-item" v-on:click="scrollToSection('education')">Education</a>
            <a class="navbar-item" v-on:click="scrollToSection('skills')">Skills</a>
            <hr class="navbar-divider" />
            <a class="navbar-item" v-on:click="scrollToSection('contact')">Contact</a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" v-on:click="scrollToSection('contact')">
              <strong>Contact</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>`,
  data() {
    return {
      title: 'Gio Ciudadano',
      titleLink: 'https://giociudadano.github.io',
      iconPath: './assets/icon.png'
    };
  },
  methods: {
    scrollToSection(name) {
      document
        .getElementById(String(name))
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
