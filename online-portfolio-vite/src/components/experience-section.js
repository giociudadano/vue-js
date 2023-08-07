appToMount.component('experience-section', {
  template:
    /*html*/
    `<div class="column is-full" id="experience">
    <p class="text-header-2">{{sectionName}}</p>
    <div class="columns experience-card hoverable-card margin-narrow" v-for="experienceCard in experienceCards">
      <div class="column no-padding-bottom">
        <p class="date">{{experienceCard.date}}</p>
      </div>
      <div class="column is-8">
        <a :href="experienceCards[0].titleLink">
          <div class="title">
            {{experienceCard.position}} • {{experienceCard.company}}
            <span class="external-link">🡭</span>
          </div>
        </a>
        <p class="description">{{experienceCard.description}}</p>
        <p class="tags">
          <span class="tag" v-for="tag in experienceCard.tags">
            <span>{{tag}}</span>
          </span>
        </p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      sectionName: 'Experience',
      experienceCards: [
        {
          date: 'Jun 2023 - Present',
          titleLink: 'https://www.dteendurance.com',
          position: 'Software Developer - Intern',
          company: 'DTE Endurance Asia',
          description:
            'Developing high-quality and responsive web applications for clients in the Philippines and in Asia.',
          tags: ['HTML', 'CSS', 'Javascript']
        },
        {
          date: 'Mar 2022 - Present',
          titleLink: 'https://www.facebook.com/upvdiwataesports',
          position: 'Graphic Designer & Social Media Manager',
          company: 'UPV Diwata Esports',
          description: `Working in graphics and promotion for the university's esports organization which fields collegiate teams in competitive video game tournaments.`,
          tags: ['Graphic Design']
        }
      ]
    };
  }
});
