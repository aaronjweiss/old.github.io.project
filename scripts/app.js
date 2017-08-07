// create the module and name it myApp
var app = angular.module('app', [
    'ui.router',
    'textAngular'
    ]);
    
	app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
	
		// MAIN STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html',
			controller: 'mainController'
        })

        // ABOUT STATES AND NESTED VIEWS ========================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
			controller: 'aboutController'
        })
		
		// RESUME STATES AND NESTED VIEWS ========================================
        .state('resume', {
            url: '/resume',
            templateUrl: 'views/resume.html',
			controller: 'resumeController'
        })

        // BLOG STATES AND NESTED VIEWS ========================================
        .state('blog', {
            url: '/blog',
            templateUrl: 'views/blog.html',
			controller: 'blogController'
        });

});
