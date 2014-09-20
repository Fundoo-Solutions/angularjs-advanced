angular.module('uiRouterDemoApp')
    .controller('CustomController', function ($state) {
        this.currentData = $state.current.data;
        this.state = $state;
    });
