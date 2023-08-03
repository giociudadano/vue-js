appToMount.component('footer-section', {
  template:
    /*html*/
    `<footer class="footer is-black-1">
    <div class="columns has-text-centered is-centered is-narrow padding-narrow">
      <div class="column is-5" id="contact">
        <div class="columns is-mobile is-centered is-vcentered no-margin">
          <div class="column is-narrow no-padding">
            <img :src="iconPath" height="48" width="48" />
          </div>
          <div class="column is-narrow no-padding">
            <p class="text-website-name">{{websiteName}}</p>
          </div>
        </div>
        <div class="column no-padding-v">
          <p class="text-desc-gray">{{copyrightText}}</p>
        </div>
      </div>
    </div>
  </footer>`,
  data() {
    return {
      websiteName: 'Gio Ciudadano',
      iconPath: './assets/icon.png',
      copyrightText: `Designed by © Gio Ciudadano 2023, All Rights Reserved`
    };
  }
});
