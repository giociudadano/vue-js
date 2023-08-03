const appToMount = Vue.createApp({});

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
