window.angular.module('ngff.controllers.nlf', [])
  .controller('NFLController', [ '$scope', '$routeParams', 'Global', 'NFL',
    function($scope, $routeParams, Global, NFL) {
      $scope.global = Global;

      $scope.nlfteams = NFL.teams;
      $scope.nflteam  =  NFL.teams[$routeParams['nflTeamId']];
    }
  ]);
