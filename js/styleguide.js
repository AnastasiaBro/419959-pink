'use strict';

(function() {
  var cardBox = document.querySelector('.card__box');
  var cards = cardBox.querySelectorAll('.card__food');

  var press = cardBox.querySelectorAll('.card__press');
  var example = cardBox.querySelectorAll('.card__example');
  var foodKind = cardBox.querySelectorAll('.card__food-kind');
  var foodKindActive = cardBox.querySelectorAll('.card__food-kind-active');
  var name = cardBox.querySelectorAll('.card__name');
  var filling = cardBox.querySelectorAll('.card__filling');
  var description = cardBox.querySelectorAll('.card__description');
  var descriptionBold = cardBox.querySelectorAll('.card__description--bold');
  var descriptionMouse = cardBox.querySelectorAll('.card__description--mouse');
  var imageContainer = cardBox.querySelectorAll('.card__image-container');
  var foodWeight = cardBox.querySelectorAll('.card__food-weight');
  var pressHref = cardBox.querySelectorAll('.card__press-href');
  var pressHover = cardBox.querySelectorAll('.card__press-hover');
  var image = cardBox.querySelectorAll('.card__image');

  cardBox.addEventListener('mouseover', onCardBoxHover);
  cardBox.addEventListener('click', onCardBoxClick);

  function onCardBoxHover(e) {
    for (var i = 0; i < cards.length; i++) {
      if (e.target !== press && ((e.target === example[i]) || (e.target === foodKind[i]) || (e.target === foodKindActive[i]) || (e.target === name[i]) || (e.target === filling[i]) || (e.target === description[i]) || (e.target === descriptionBold[i]) || (e.target === descriptionMouse[i]) || (e.target === imageContainer[i]) || (e.target === foodWeight[i]) || (e.target === pressHref[i]) || (e.target === image[i]))) {
        if (!cards[i].classList.contains('card__food--active')) {
          cards[i].classList.add('card__food--hover');
          example[i].classList.remove('card__example-hover');
          var number = i;
          cards[number].addEventListener('mouseout', function() {
            cards[number].classList.remove('card__food--hover');
          });
        } else {
          var number = i;
          example[number].addEventListener('mouseleave', function() {
            example[number].classList.add('card__example-hover');
          });
        }
      }
    }
  }

  function onCardBoxClick(e) {
    for (var i = 0; i < cards.length; i++) {
      if (e.target !== press && ((e.target === example[i]) || (e.target === foodKind[i]) || (e.target === name[i]) || (e.target === filling[i]) || (e.target === description[i]) || (e.target === imageContainer[i]) || (e.target === foodWeight[i]) || (e.target === pressHref[i]) || (e.target === image[i]))) {
        cards[i].classList.toggle('card__food--active');
        press[i].classList.toggle('visually-hidden');
        pressHover[i].classList.toggle('visually-hidden');
        example[i].classList.remove('card__example-hover');
      }
    }
  }
})();
