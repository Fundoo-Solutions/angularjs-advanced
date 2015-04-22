require.config({
    baseUrl: '/scripts',
    paths: {
		'angular': '/bower_components/angular/angular',
		'angular-route': '/bower_components/angular-route/angular-route',
		'ui-router': '/bower_components/angular-ui-router/release/angular-ui-router.min',
		'bootstrap': '../lib/bootstrap/js/bootstrap.min',
		'jquery': '/bower_components/jquery/dist/jquery'
    },
	shim: {
		'app': {
			deps: ['angular', 'ui-router', 'bootstrap']
		},
		'angular-route': {
			deps: ['angular']
		},
    'ui-router': {
      deps: ['angular']
    },
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);