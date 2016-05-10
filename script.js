// create the module and name it myApp
    var myApp = angular.module('myApp', ['ngRoute'])
	.constant("baseURL","http://localhost:3000/") {
		this.getCountries = function() { return $http.get(baseURL); };
		this.getCountry = function(index) { return $http.get(baseURL+"/"+index); };
	};
	
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
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope, $http) {
    
       $http.get('countries.json').success(function(data) {
	       $scope.countries = data;
	   });
       $scope.countryFilter   = '';     // set the default search/filter term
    });
	
	myApp.controller('aboutController', function($scope) {
        $scope.message = "Hellloooooou!";
    });

    myApp.controller('contactController', function($scope) {
        // function to submit the form after all validation has occurred            
        $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
          alert('Gj');
        }
      };
    });