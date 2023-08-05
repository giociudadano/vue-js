appToMount.component('navigation-bar', {
  template:
    /*html*/
    `      
      <nav class="navbar is-fixed-top is-white" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" :href="link.app">
            <img class="website-icon" :src="iconPath" height="32" />
            <p class="website-name">PLACE<span class="text-green">.FINDER</span></p>
          </a>
        </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" :href="link.website">Home</a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Apps</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" :href="link.app">Place Finder</a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" :href="link.donate">
              <span class="icon">
                <i class="fas fa-heart"></i>
              </span>
              <span><strong>Buy me a Coffee</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>`,
  data() {
    return {
      websiteName: 'Place.Finder',
      link: {
        website: 'https://giociudadano.github.io',
        app: './index.html',
        donate: 'https://www.buymeacoffee.com/'
      },
      iconPath: './assets/icon.png',
      isShown: false
    };
  }
});
