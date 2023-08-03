appToMount.component('skills-section', {
  template:
    /*html*/
    `<div class="column is-full" id="skills">
    <p class="text-header-2">{{sectionName}}</p>
    <div
      class="columns skills-card margin-narrow"
      v-for="skillCard in skillCards"
    >
      <div class="column">
        <p class="title">{{skillCard.title}}</p>
        <p class="tags">
          <span class="tag" v-for="tag in skillCard.tags">
            <span>{{tag}}</span>
          </span>
        </p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      sectionName: 'Skills',
      skillCards: [
        {
          title: 'Programming Languages',
          tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'C/C++', 'Java', 'SQL']
        },
        {
          title: 'Libraries & Frameworks',
          tags: ['Flutter', 'Firebase', 'Git']
        }
      ]
    };
  }
});
