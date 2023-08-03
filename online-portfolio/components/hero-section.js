appToMount.component('hero-section', {
  template:
    /*html*/
    `<section class="hero is-fullheight" id="about-me">
      <div class="hero-head">
        <div class="columns">
          <div class="column is-10 is-offset-1 padding-wide">
            <div>
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item no-padding-h" :href="websiteLink">
                    <img :src="iconPath" height="32" />
                    <p class="text-website-name">{{websiteName}}</p>
                  </a>
                </div>
                <div class="navbar-menu">
                  <div class="navbar-start"></div>
                  <div class="navbar-end">
                    <a class="navbar-item" v-for="section in sections" v-on:click="scrollToSection(section.id)">
                      {{section.name}}
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-body no-padding-h">
        <div class="columns hero-info">
          <div class="column is-two-fifths is-offset-1">
            <p class="no-margin title text-header-1">{{title}}</p>
            <p class="text-accent-1 margin-narrow">{{subtitle}}</p>
            <p class="subtitle text-desc-white">{{description}}</p>
            <div class="columns is-mobile">
              <div class="column is-narrow padding-narrow" v-for="social in socials">
                <a :href="social.link">
                    <img class="media-icon" :src="social.iconPath" :title="social.name"
                /></a>
              </div>
            </div>
            <div class="columns is-mobile" v-on:click="scrollToSection('projects')">
              <div class="column is-narrow">
                <div class="interact-text-container">
                  <div class="interact-text">{{callToAction}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-video-container">
          <!--<iframe
            class="hero-video"
            src="https://www.youtube.com/embed/uvcxiYZRInE?start=504&autoplay=1&mute=1&controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>-->
          <img class="hero-video" src="./assets/hero-fallback-image.png" />
        </div>
      </div>
      <div class="hero-gradient"></div>
    </section>`,
  data() {
    return {
      websiteName: 'Gio Ciudadano',
      websiteLink: 'https://giociudadano.github.io',
      iconPath: './assets/icon.png',
      sections: [
        { name: 'About Me', id: 'about-me' },
        { name: 'Experience', id: 'experience' },
        { name: 'Education', id: 'education' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
      ],
      title: 'Hi, my name is Gio Ciudadano!',
      subtitle: 'Software Engineer Intern',
      description:
        'I am an undergraduate student with experience in developing and maintaining applications. I specialize working in game development, \
        mobile applications, database management, and machine learning. My experience also includes collaborating with teams to deliver \
        software on-time and within budget.',
      socials: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/gcciudadano',
          iconPath: './assets/icons8-linkedin-48.png'
        },
        {
          name: 'Behance',
          link: 'https://www.behance.net/giociudadano',
          iconPath: './assets/icons8-behance-48.png'
        },
        {
          name: 'GitHub',
          link: 'https://www.github.com/giociudadano',
          iconPath: './assets/icons8-github-48.png'
        }
      ],
      callToAction: 'View Works'
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
