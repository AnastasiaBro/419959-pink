var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navHeader = document.querySelector('.page-header__wrapper');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
navHeader.classList.remove('page-header__wrapper--none');
navHeader.classList.add('page-header__wrapper--transparent');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navHeader.classList.remove('page-header__wrapper--transparent');
    navHeader.classList.add('page-header__wrapper--none');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navHeader.classList.add('page-header__wrapper--transparent');
    navHeader.classList.remove('page-header__wrapper--none');
  }
});
