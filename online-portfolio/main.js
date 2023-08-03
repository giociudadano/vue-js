const appToMount = Vue.createApp({
  data() {
    return {
      websiteName: 'Gio Ciudadano',
      heroTitle: 'Hi, my name is Gio Ciudadano!',
      heroSubtitle: 'Software Engineer Intern',
      heroDescription:
        'I am an undergraduate student with experience in developing and maintaining applications. I specialize working in game development, \
        mobile applications, database management, and machine learning. My experience also includes collaborating with teams to deliver \
        software on-time and within budget.',
      heroCallToAction: 'View Works',
      sectionHeaders: [
        'About Me',
        'Experience',
        'Education',
        'Skills',
        'Projects',
        'Contact'
      ],
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
      ],
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
      ],
      skillCards: [
        {
          title: 'Programming Languages',
          tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'C/C++', 'Java', 'SQL']
        },
        {
          title: 'Libraries & Frameworks',
          tags: ['Flutter', 'Firebase', 'Git']
        }
      ],
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
      ],
      contact: {
        description: `I'm always looking for opportunities particularly in game development. If you are looking for talented and passionate individuals, I may just be the developer you are looking for! Let's discuss more in-detail through e-mail, and I'll get back to you as soon as I can.`,
        callToAction: 'Get in Touch'
      },
      copyrightText: `Designed by © Gio Ciudadano 2023, All Rights Reserved`
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      this.cart.pop(id);
    }
  }
});

function updateNavigationBar(e) {
  const navbar = document.querySelector('.navbar');
  let scrollYPos = this.scrollY;
  if (navbar) {
    if (scrollYPos > 350) {
      navbar.classList.add('shown');
    } else {
      navbar.classList.remove('shown');
    }
  }
}

window.addEventListener('scroll', updateNavigationBar);

function scrollToSection(sectionName) {
  document
    .getElementById(String(sectionName))
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}
