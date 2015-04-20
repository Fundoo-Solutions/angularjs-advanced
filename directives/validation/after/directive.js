angular.module('stockMarketApp')
  .directive('validZip', [function() {
    var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, $attrs, ngModelCtrl) {
        ngModelCtrl.$validators.zip = function(value) {
          return zipCodeRegex.test(value);
        };
      }
    };
  }]);
