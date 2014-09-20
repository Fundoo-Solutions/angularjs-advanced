angular.module('uiRouterDemoApp')
    .controller('NamedController', function ($state) {
        $state.go('named.views');
    });