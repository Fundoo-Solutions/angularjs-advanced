function myController($log, $http) {
  var self = this;
  self.value = 'someValue';
  self.activate = function(){
    $http.get('someUrl').then(function(data){
      self.value = data;
    });
  };
  this.clickEvent = function(data){
    // Click event of any element.
  };

  // Finally, till the new router
  self.activate();
}

app.controller('myController',['$log', '$http', myController]);
