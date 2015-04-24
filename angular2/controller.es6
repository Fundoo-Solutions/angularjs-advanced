export class myController {
  value;
  constructor($log, $http) {
    this.value = 'someValue';
    this.$http = $http;
    // Till the new router
    this.activate();
  }
  activate() {
    this.$http.get('someDataUrl').then(function(data) {
      this.value = data;
    });
  }
  clickEvent(data) {
    // Click event of any element.
  }
}

app.controller('myController',['$log', '$http', myController]);
