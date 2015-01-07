(function() {
  'use strict';
  window.App = angular.module('ikonicApp', ['ngRoute']).config(function($routeProvider) {
    return $routeProvider.when('/coming_soon', {
      templateUrl: 'views/coming_soon.html',
      controller: 'MainCtrl'
    }).otherwise({
      redirectTo: '/coming_soon'
    });
  });

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/
(function() {
  'use strict';
  angular.module('ikonicApp').controller('MainCtrl', function($scope) {
    return $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  });

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/