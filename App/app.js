(function () {
    "use strict";

    var homePage = angular.module('homePage', []);

    homePage.controller('homeController', ['$scope',
        function ($scope) {
          $scope.pleaseWork = "AngularJS $scope working";
        }]);
})();
