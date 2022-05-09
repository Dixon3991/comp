(function() {
  'use strict';

  angular.module('CompApp')
  .component('CarouselSlider', {
    templateUrl: 'src/app/carousel-slider/carousel-slider.component.html',
    bindings: {
      carouselSlide: '<'
    },
    controller: CarouselSliderController
  });
})();
