angular.module('uiRouterDemoApp', ['ui.router'])
    .config(function ($stateProvider) {

        $stateProvider
            // simple state with template
            .state('welcome', {
                url: '/',
                templateUrl: 'views/welcome/welcome.html'
            })

            // passing route parameters
            .state('params', {
                url: '/params/:name/:id?key',
                templateUrl: 'views/params/params.html',
                controller: 'ParamsController'
            })

            // attaching custom data to state object
            .state('customData', {
                url: '/customData',
                templateUrl: 'views/custom/custom.html',
                controller: 'CustomController',
                controllerAs: 'custom',
                data: {
                    key: 5244566,
                    desc: 'custom data attached to an state'
                }
            })

            // start nested views hierarchy
            .state('nested', {
                url: '/nested',
                templateUrl: 'views/nested/nested.html',
                data: {desc: "some custom data from the parent state"}
            })

            .state('nested.user', {
                url: '/user',
                templateUrl: 'views/nested/sub-views/user-area.html'
            })

            .state('nested.profile', {
                templateUrl: 'views/nested/sub-views/profile.html'
            })

            .state('nested.admin', {
                templateUrl: 'views/nested/sub-views/admin.html'
            })

            // nested views inherits data, check out the "SettingController"
            .state('nested.admin.setting', {
                templateUrl: 'views/nested/sub-views/admin-sections/setting.html',
                controller: 'SettingController'
            })

            // base state for the named views
            .state('named', {
                url: '/named',
                templateUrl: 'views/named/named.html',
                controller: 'NamedController'
            })

            // state with multiple named views
            .state('named.views', {
                views: {
                    "header": {templateUrl: 'views/named/header.html'},
                    "sideBar": {templateUrl: 'views/named/sidebar.html'},
                    "main": {templateUrl: 'views/named/main.html'}
                }
            })

            // state with callbacks callbacks
            .state('calls', {
                url: '/callbacks',
                templateUrl: 'views/callbacks/callbacks.html',

                resolve: {
                    enterMsg: function () {
                        return 'Callback: Entering to state - "calls"';
                    },

                    leaveMsg: function () {
                        return 'Callback: Leaving state - "calls"';
                    }
                },

                // callbacks can access to resolved data
                onEnter: function (enterMsg) {
                    alert(enterMsg)
                },

                onExit: function (leaveMsg) {
                    alert(leaveMsg)
                }
            })
    });

// use the $state service to navigate to specific state
angular.module('uiRouterDemoApp')
    .run(function ($state) {
        $state.go('welcome');
    });
