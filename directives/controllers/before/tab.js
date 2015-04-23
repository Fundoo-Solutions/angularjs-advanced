angular.module('stockMarketApp')
  .directive('tab', [function() {
    return {
      restrict: 'E',
      // transclude, require and child scope
      template: '<div ng-show="selected"></div>',
      link: function($scope, $element, $attr) {
        // register with attrs title and $scope
      }
    };
  }]);
