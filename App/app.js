(function () {
    "use strict";

    var ngModule = angular.module('ngModule', []);

    angular.module('ngModule').directive('navBar', function() {
      return {
        templateUrl: 'navbar.html'
      };
    });

    ngModule.controller('ngController', ['$scope',
        function ($scope) {
          $scope.whoAmI = "I'm a coffee";
        }]);
})();
