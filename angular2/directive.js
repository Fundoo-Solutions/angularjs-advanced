angular.directive('myApp', function() {
  return {
    restrict: 'E',
    template: '<h1>Hello {{ name }}, you passed in {{passedIn}}</h1>',
    scope: {
      passedIn: '='
    },
    link: function($scope) {
      $scope.name = 'Alice';
    }
  };
});
