angular.module('stockMarketApp').directive('simpleStockRepeat',
    [function() {
  return {
    restrict: 'A',
    template: '' +
      '<div class="container">' +
      '  <a href="" ng-click="previous()" ng-show="hasPrevious()">Previous</a> ' +
      '  <div class="carousel"></div> ' +
      '  <a href="" ng-click="next()" ng-show="hasNext()">Next</a> ' +
      '</div>',

    link: function($scope, $element, $attrs, ctrl, $transclude) {
      var myArray;
      var childScope;
      var currentIndex = 0;
      $scope.next = function() {
      };
      $scope.hasNext = function() {
      };
      $scope.previous = function() {
      };
      $scope.hasPrevious = function() {
      };
      var container = $element.find('.carousel');

      var instance = $transclude(scope,
          function(clonedElement, newScope) {

      });
      // Add it to our container
      container.append(instance);
    }
  };
  }]);
