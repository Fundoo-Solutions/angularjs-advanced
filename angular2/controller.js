app.controller('myController',['$log', '$http', '$scope',
  function($log, $http, $scope) {
    $scope.value = 'someValue';
    $http.get('someDataUrl').then(function(data){
      $scope.value = data;
    });
    $scope.clickEvent = function(data){
      // Click event of any element.
    }
  }])
