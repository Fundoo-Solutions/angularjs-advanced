define(['routes','services/dependencyResolverFor'], function(config, dependencyResolverFor) {
  var app = angular.module('app', ['ui.router']);

  app.config(
      [
        '$stateProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($stateProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
          app.controller = $controllerProvider.register;
          app.directive  = $compileProvider.directive;
          app.filter     = $filterProvider.register;
          app.factory    = $provide.factory;
          app.service    = $provide.service;

          if(config.states !== undefined) {
            angular.forEach(config.states, function(route, state) {
              $stateProvider.state(state, {url: route.url, templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
            });
          }
        }
      ]);

  return app;
});