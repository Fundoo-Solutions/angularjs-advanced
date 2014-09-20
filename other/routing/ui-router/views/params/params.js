angular.module('uiRouterDemoApp')
    .controller('ParamsController', function ($scope, $stateParams, $state) {
        $scope.parameters = $stateParams;
        $scope.state = $state;
    });