'use strict';

var CONFIG = {};
CONFIG.api = {
  endpoint : "http://foodmania.herokuapp.com",
  port : "80"
};
CONFIG.api.route = CONFIG.api.endpoint + ':' + CONFIG.api.port;

// Declare app level module which depends on views, and components
angular.module('foodelicious', [
  'ngRoute',
  'ngResource',
  'ngMaterial',
  'ngFx',
  'foodelicious.authService',
  'foodelicious.apiService',
  'foodelicious.toastService',
  'foodelicious.views'
]).
controller('LayoutController', function($scope, $mdSidenav, $location, authService, toastService) {
  $scope.user = authService.currentUser();

  $scope.openLeftMenu = function() {
    if (!$mdSidenav('left').isOpen())
      $mdSidenav('left').open();
  };
  $scope.routeTo = function(route) {
    $location.path('/'+route);
      $mdSidenav('left').close();
  };
  $scope.signout = function() {
    toastService.toast('Bye '+ $scope.user.name + ' ! Hope to see you soon !');
    authService.logout();
    $location.path('/signin');
    $mdSidenav('left').toggle();
  };
  $scope.call = function(name) {
    $scope[name]();
  };
  $scope.openSideNav = function(bool) {
    var isOpen = $mdSidenav('left').isOpen();
    if (bool == !isOpen) {
      $mdSidenav('left').toggle(bool);
    }
  }
}).
run(['$rootScope', '$location', '$window' ,'authService', function($rootScope, $location, $window, authService) {
      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        var notAuthRoutes = authService.getRank('anonym');
        var currentRoute = $location.path();
        var good = false;

        if (!authService.currentUser().token) {
          for (var i = 0; i < notAuthRoutes.length; i++) {
            if (currentRoute == '/' + notAuthRoutes[i].route) {
              good = true;
            }
          }
          if (!good) {
            $location.path('/signin')
          }
        }
      });
    }])
;
