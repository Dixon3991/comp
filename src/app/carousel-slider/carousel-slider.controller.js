(function() {
  'use strict';

  angular.module('CompApp')
  .controller('CarouselSliderController', CarouselSliderController);

  CarouselSliderController.$inject = ['carouselSlides'];
  function CarouselSliderController(carouselSlides) {
    var $ctrl = this;
    $ctrl.carouselSlides = carouselSlides;
  }
})();
