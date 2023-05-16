const telOpenNav = () => {
  const mainNav = document.querySelector('.main-nav');
  const button = document.querySelector('.main-nav__toggle');
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

const activeMap = () => {
  const sedonaImage = document.querySelector('.sedona-map__image');
  const iframe = document.querySelector('.sedona-map__iframe');

  if (sedonaImage) {
    sedonaImage.classList.remove('sedona-map__image--no-js')
    iframe.classList.remove('sedona-map__iframe--no-js');
  }
}

telOpenNav();
activeMap();
