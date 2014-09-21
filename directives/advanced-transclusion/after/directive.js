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
    // Capture and replace the entire element
    // instead of just its content
    transclude: true,
    // A $transclude is passed in as the fifth
    // argument to the link function
    link: function($scope, $element, $attrs, ctrl, $transclude) {
      var myArray = $scope.$eval($attrs.simpleStockRepeat);
      var childScope;
      var currentIndex = 0;
      $scope.next = function() {
        currentIndex++;
        childScope.stock = myArray[currentIndex];
      };
      $scope.hasNext = function() {
        return currentIndex < myArray.length - 1;
      };
      $scope.previous = function() {
        currentIndex--;
        childScope.stock = myArray[currentIndex];
      };
      $scope.hasPrevious = function() {
        return currentIndex > 0;
      };
      var container = $element.find('.carousel');

      var instance = $transclude($scope.$new(),
          function(clonedElement, newScope) {
        childScope = newScope;
        childScope.stock = myArray[0];
      });
      // Add it to our container
      container.append(instance);


    }
  };
  }]);
