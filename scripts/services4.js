'use strict';
angular.module('carsApp')
 .constant("baseURL","http://localhost:3000/")
 .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
  this.getFeedback = function () {
   return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }}) }; 
  this.getCars = function() {
   return $resource(baseURL+"books/:id",null,{'update':{method:'PUT'}}); }
 // this.getCars = function() { return $http.get(baseURL+"cars"); };
 // this.getCar = function(index) { return $http.get(baseURL+"cars/"+index); };
 }])

.service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
 this.getEmployees = function() {
  return $resource(baseURL+"empl/:id",null,{'update':{method:'PUT'}}); }
// this.getEmployees = function() { return $http.get(baseURL+"empl"); };
// this.getEmployee = function(index) { return $http.get(baseURL+"empl/"+index); };
 }])

;