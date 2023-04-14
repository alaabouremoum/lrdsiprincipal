// document.addEventListener('scroll', function() {
//     const pubComme = document.getElementById('pubcomm');
//     const TheseMemoire = document.getElementById('these_Memoire');
//     const Evenement = document.getElementById('evenement');
//     const navBar = document.getElementById('nav_sec');
  
//     // Get the vertical scroll position
//     const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
//     // Check which section is currently visible
//     if (scrollPos >= pubComme.offsetTop && scrollPos < TheseMemoire.offsetTop) {
//       navBar.querySelector('a[href="#pc"]').style.color = '#007bff';
//       navBar.querySelector('a[href="#tm"]').style.color = '#333';
//       navBar.querySelector('a[href="#es"]').style.color = '#333';
//     } else if (scrollPos >= TheseMemoire.offsetTop && scrollPos < Evenement.offsetTop) {
//       navBar.querySelector('a[href="#pc"]').style.color = '#333';
//       navBar.querySelector('a[href="#tm"]').style.color = '#007bff';
//       navBar.querySelector('a[href="#es"]').style.color = '#333';
//     } else if (scrollPos >= Evenement.offsetTop) {
//       navBar.querySelector('a[href="#home"]').style.color = '#333';
//       navBar.querySelector('a[href="#tm"]').style.color = '#333';
//       navBar.querySelector('a[href="#es"]').style.color = '#007bff';
//     }
//   }); 
const homeLink = document.getElementById('pc');
const aboutLink = document.getElementById('tm');
const settingsLink = document.getElementById('es');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the positions and heights of the sections
  const homeSection = document.getElementById('pubcomm');
  const aboutSection = document.getElementById('these_Memoire');
  const settingsSection = document.getElementById('evenement');
  const homeSectionTop = homeSection.offsetTop;
  const aboutSectionTop = aboutSection.offsetTop;
  const settingsSectionTop = settingsSection.offsetTop;
  const homeSectionHeight = homeSection.offsetHeight;
  const aboutSectionHeight = aboutSection.offsetHeight;
  const settingsSectionHeight = settingsSection.offsetHeight;
  const homeSectionBottom = homeSectionTop + homeSectionHeight;
  const aboutSectionBottom = aboutSectionTop + aboutSectionHeight;
  const settingsSectionBottom = settingsSectionTop + settingsSectionHeight;

  // Get the current scroll position
  const currentScrollPos = window.scrollY;

  // Check which section is currently in view
  if (currentScrollPos >= homeSectionTop && currentScrollPos < homeSectionBottom) {
    // Add a CSS class to the Home link to change its color
    homeLink.classList.add('active');
    aboutLink.classList.remove('active');
    settingsLink.classList.remove('active');
  } else if (currentScrollPos >= aboutSectionTop && currentScrollPos < aboutSectionBottom) {
    // Add a CSS class to the About link to change its color
    homeLink.classList.remove('active');
    aboutLink.classList.add('active');
    settingsLink.classList.remove('active');
  } else if (currentScrollPos >= settingsSectionTop && currentScrollPos < settingsSectionBottom) {
    // Add a CSS class to the Settings link to change its color
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    settingsLink.classList.add('active');
  }
});