'use strict';
angular.module('bookApp')
 .constant("baseURL","http://localhost:3000/")
 .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
  this.getFeedback = function () {
   return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }}) }; 
  this.getBooks = function() {
   return $resource(baseURL+"books/:id",null,{'update':{method:'PUT'}}); }
 }])

.service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
 this.getEmployees = function() {
  return $resource(baseURL+"empl/:id",null,{'update':{method:'PUT'}}); }
 }])

;