'use strict';
angular.module('bookApp')
 .constant("baseURL","http://localhost:3000/")
 .service('menuFactory', ['$http', 'baseURL', function($http,baseURL) {
 this.getBooks = function() { return $http.get(baseURL+"books"); };
 this.getBook = function(index) { return $http.get(baseURL+"books/"+index); };
 }])

.service('corporateFactory', ['$http', 'baseURL', function($http,baseURL) {
 this.getEmployees = function() { return $http.get(baseURL+"empl"); };
 this.getEmployee = function(index) { return $http.get(baseURL+"empl/"+index); };
 }])

;