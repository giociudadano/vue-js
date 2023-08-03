appToMount.component('projects-section', {
  template:
    /*html*/
    `<div class="column is-7" id="projects">
    <p class="text-header-2">{{sectionName}}</p>
    <div class="columns is-multiline is-variable is-4 margin-narrow">
      <div
        class="column is-4 project-card hoverable-card"
        v-for="projectCard in projectCards"
      >
        <a :href="projectCard.webLink">
          <img
            class="section-mc-thumb"
            :src="projectCard.thumbnailLink"
          />
  
          <p class="title">
            {{projectCard.title}}
            <span class="external-link">🡭</span>
          </p>
        </a>
        <p class="description">{{projectCard.description}}</p>
        <p class="tags">
          <span class="tag" v-for="tag in projectCard.tags">
            <span>{{tag}}</span>
          </span>
        </p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      sectionName: 'Projects',
      projectCards: [
        {
          webLink: 'https://github.com/giociudadano/vtuber-rush',
          thumbnailLink: './assets/thumb-vtrush.png',
          title: 'VTuber Rush! - A Tower Defense Game',
          description: `A real-time strategy video game. Use six different characters to defend against an endless wave of enemies and strategize your way to victory! Features a built-in level and wave editor.`,
          tags: ['Java', 'Video Games']
        },
        {
          webLink: 'https://github.com/giociudadano/echo',
          thumbnailLink: './assets/thumb-echo.png',
          title: 'Echo - A Collaborative Cross-Platform Note-Taking App',
          description: `A cross-platform web and mobile note-taking application. Create a group with your friends or family, write notes, and share it to other users in real-time.`,
          tags: ['Dart', 'Flutter', 'Firebase', 'Productivity']
        }
      ]
    };
  }
});
