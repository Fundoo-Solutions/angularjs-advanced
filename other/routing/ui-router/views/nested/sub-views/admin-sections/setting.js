angular.module('uiRouterDemoApp')
    .controller('SettingController', function ($scope, $state) {
        $scope.fatherStateData =  $state.current.data;
    });