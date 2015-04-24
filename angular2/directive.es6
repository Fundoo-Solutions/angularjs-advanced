angular.directive('myApp', myAppDirective);

function myAppDirective() {
  return {
    restrict: 'E',
    template: '<h1>Hello {{ myAppCtrl.name }}, you passed in {{myAppCtrl.passedIn}}</h1>',
    controller: 'myAppDirectiveController',
    controllerAs: 'myAppCtrl',
    bindToController: {
      passedIn: '='
    }
  };
}

angular.controller('myAppDirectiveController', myAppDirectiveController);

export class myAppDirectiveController {
  name;
  constructor() {
    this.name = 'Alice';
  }
}
