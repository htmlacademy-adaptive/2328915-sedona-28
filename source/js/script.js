
// const telOpenNav = () => {
// const mainNav = document.querySelector('.main-nav');
// const button = document.querySelector('.main-nav__toggle');

// mainNav.classList.remove('main-nav--nojs');

// button.addEventListener('click', () => {
//   if (mainNav.classList.contains('main-nav--closed')) {
//     mainNav.classList.remove('main-nav--closed');
//     mainNav.classList.add('main-nav--opened');
//   } else {
//     mainNav.classList.add('main-nav--closed');
//     mainNav.classList.remove('main-nav--closed');
//   }
// });
// }

// telOpenNav();

const telOpenNav = () => {
const mainNav = document.querySelector('.main-nav');
const button = document.querySelector('.main-nav__toggle');
const logo = document.querySelector('.main-header__logo');
mainNav.classList.remove('main-nav--nojs');

button.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
};

const activeNavLink = () => {
  const linkNav = document.querySelector('.main-nav__link');

  linkNav.addEventListener('click', () => {
    if (!linkNav.classList.contains('main-nav__link--active')) {
      linkNav.classList.add('main-nav__link--active')
    } else {
      linkNav.classList.remove('main-nav__link--active');
    }
  });
};

activeNavLink();
telOpenNav();
