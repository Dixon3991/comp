(function() {
  'use strict';

  angular.module('ExampleAngularApp', [])
  .controller('ExampleAngularAppController', ExampleAngularAppController);

  ExampleAngularAppController.$inject = ['$scope'];
  // Scope refers to variables in the html page.
  function ExampleAngularAppController($scope) {
    // Controller function isnt necessary here but this is what it looks like to define one.
   
  }

})();