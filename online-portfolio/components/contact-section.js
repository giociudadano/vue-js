appToMount.component('contact-section', {
  template:
    /*html*/
    `<section class="section is-medium is-black-2">
    <div class="columns is-centered is-narrow padding-narrow">
      <div class="column has-text-centered is-5" id="contact">
        <p class="text-header-2">{{sectionName}}</p>
        <p class="text-desc-gray">{{description}}</p>
        <div
          class="columns is-mobile is-centered"
          onclick="window.location='mailto:gcciudadano@gmail.com';"
        >
          <div class="column is-narrow padding-wide">
            <div class="interact-text-container">
              <div class="interact-text">{{callToAction}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  data() {
    return {
      sectionName: 'Contact',
      description: `I'm always looking for opportunities particularly in game development. If you are looking for talented and passionate individuals, I may just be the developer you are looking for! Let's discuss more in-detail through e-mail, and I'll get back to you as soon as I can.`,
      callToAction: 'Get in Touch'
    };
  }
});
