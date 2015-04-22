define([], function()
{
    return {
        defaultRoutePath: '/',
        states: {
            'landing': {
                url: '/',
                templateUrl: '/views/home.html',
                dependencies: [
                    'controllers/HomeViewController'
                ]
            },
            'about': {
                url: '/about/:person',
                templateUrl: '/views/about.html',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            'contact': {
                url: '/contact',
                templateUrl: '/views/contact.html',
                dependencies: [
                    'controllers/ContactViewController'
                ]
            }
        }
    };
});