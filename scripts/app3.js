'use strict';
angular.module('carsApp',['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) { $stateProvider
 .state('app', { url:'/', views: {
  'header': { templateUrl : 'views/header.html' },
  'content': { templateUrl : 'views/home.html', controller  : 'IndexController' },
  'footer': { templateUrl : 'views/footer.html' }
 } })
 .state('app.about', { url:'about', views: {
  'content@': { templateUrl : 'views/about.html', controller : 'AboutController' }
 } })
 .state('app.contact', { url:'contact', views: {
  'content@': { templateUrl : 'views/contact.html', controller : 'ContactController' }
 } })
 .state('app.menu', { url: 'menu', views: {
  'content@': { templateUrl : 'views/menu.html', controller : 'MenuController' }
 } })
 .state('app.cardetails', { url: 'menu2/:id', views: {
  'content@': { templateUrl : 'views/detail.html', controller : 'CarDetailController' }
 } });
 $urlRouterProvider.otherwise('/');
})
;