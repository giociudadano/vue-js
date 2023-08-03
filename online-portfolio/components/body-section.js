appToMount.component('body-section', {
  template:
    /*html*/
    `<section class="section is-small is-black-1 no-padding-h">
      <div class="columns padding-wide is-centered is-variable is-6">
        <div class="column is-3">
          <div class="columns is-multiline">
            <experience-section></experience-section>
            <education-section></education-section>
            <skills-section></skills-section>
          </div>
        </div>
        <projects-section></projects-section>
      </div>
    </section>`
});
