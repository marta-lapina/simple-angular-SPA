'use strict';
angular.module('bookApp')
 .controller('MenuController', [ '$scope', 'menuFactory', function($scope,menuFactory) {
  $scope.showMenu = false;
  $scope.message = "Loading ...";
  menuFactory.getBooks().query(
   function(resp) { $scope.books = resp; $scope.showMenu = true; },
   function(resp) { $scope.message = "Error: "+resp.status + " " + resp.statusText; });
      $scope.tab = 1;
      $scope.filtText = '';
      $scope.showDetails = false;
      $scope.select = function(setTab) { 
       $scope.tab = setTab;
       $scope.filtText = "";
     //  if (setTab === 2) { $scope.filtText = "Balts"; }
     //  else if (setTab === 3) { $scope.filtText = "Zils"; }
     //  else if (setTab === 4) { $scope.filtText = "Melns"; }
     //  else { $scope.filtText = ""; }                                    
                                     };
      $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
      $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
      };
      
  }])

 .controller('ContactController', ['$scope', function($scope) {
  $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
  var channels = [{value:"tel", label:"Telefons"}, {value:"Email",label:"E-pasts"}];
  $scope.channels = channels;
  $scope.invalidChannelSelection = false;
  }])

 .controller('FeedbackController', ['$scope', 'menuFactory', function($scope,menuFactory) {
  $scope.sendFeedback = function() {
   console.log($scope.feedback);
   if ($scope.feedback.agree && ($scope.feedback.mychannel === "")&& !$scope.feedback.mychannel)   { $scope.invalidChannelSelection = true; console.log('incorrect'); }
   else { $scope.invalidChannelSelection = false;
    menuFactory.getFeedback().save({id:$scope.feedback.id},$scope.feedback);
    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
    $scope.feedback.mychannel="";
    $scope.feedbackForm.$setPristine();
    console.log($scope.feedback); }
  };
 }])

.controller('BookDetailController', ['$scope','$stateParams','menuFactory', function($scope,$stateParams,menuFactory) {
            $scope.feedback = {rating:'', comment:'', author:'', date:'' };
            $scope.feedback.rating='5';
            $scope.sendFeedback = function() {
                $scope.feedback.date=new Date;
                $scope.book.comments.push($scope.feedback);
                menuFactory.getBooks().update({id:$scope.book.id},$scope.book);
                $scope.feedbackForm.$setPristine();
                $scope.feedback = {author:"", rating:"5", comment:""};
                console.log($scope.feedback);
            };
    $scope.showBook = false;
    $scope.message="Loading ...";
    menuFactory.getBooks().get({id:parseInt($stateParams.id,10)}) .$promise.then(
     function(resp) { $scope.book = resp; $scope.showBook = true; },
     function(resp) { $scope.message = "Error: "+resp.status + " " + resp.statusText; } );
        }])
.controller('AboutController', ['$scope', 'corporateFactory', 
 function($scope, corporateFactory) {
  $scope.showEmp = false;
  $scope.message = "Loading ...";
  corporateFactory.getEmployees().query(
   function(resp) { $scope.emp = resp; $scope.showEmp = true; },
   function(resp) { $scope.message = "Error: "+resp.status + " " + resp.statusText; });     
 }])
.controller('IndexController', ['$scope', 'corporateFactory', 'menuFactory',
 function($scope, corporateFactory,menuFactory) {
  $scope.showEmp = true;
  $scope.message="Loading ...";
  corporateFactory.getEmployees().get({id:0}) .$promise.then(
   function(resp) { $scope.emp = resp; $scope.showEmp = true; },
   function(resp) { $scope.message = "Error: "+resp.status + " " + resp.statusText; } );     
  $scope.showBook = true;
  $scope.message="Loading ...";
  menuFactory.getBooks().get({id:3}) .$promise.then(
   function(resp) { $scope.book = resp; $scope.showBook = true; },
   function(resp) { $scope.message = "Error: "+resp.status + " " + resp.statusText; } );
 }])
;