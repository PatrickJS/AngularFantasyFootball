window.angular.module('ngff.services.global', [])
  .factory('Global', [ '$window', function($window) {
    var current_user = $window.user;

    return current_user;
  }]);
