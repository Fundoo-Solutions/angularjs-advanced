angular.module('stockMarketApp')
  .directive('tab', [function() {
    return {
      restrict: 'E',
      template: '<div ng-show="selected"></div>',
      link: function($scope, $element, $attr) {

      }
    };
  }]);
