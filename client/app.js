'use strict';

// Declare app level module which depends on views, and components
angular.module('collaby', [
  'ngRoute',
  'collaby.whiteboard'
  // 'collaby.tasks',
  // 'collaby.chat'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);