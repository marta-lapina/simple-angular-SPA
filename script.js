// create the module and name it myApp
    var myApp = angular.module('myApp', ['ngRoute']);
	
	// configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
			
		// use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope, $http) {
    
       $http.get('countries.json').success(function(data) {
	       $scope.countries = data;
	   });
       $scope.countryFilter   = '';     // set the default search/filter term
    });
	
	myApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    myApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });