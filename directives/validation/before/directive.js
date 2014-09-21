angular.module('stockMarketApp')
  .directive('validZip', [function() {
    var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        // Handle DOM update --> Model update
        ngModelCtrl.$parsers.unshift(function(value) {
          // return value for model
        });

        // Handle Model Update --> DOM
        ngModelCtrl.$formatters.unshift(function(value) {
          // return value for ui
        });
      }
    };
  }]);
