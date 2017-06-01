var app = angular.module("cannesTicketsApp", []);

app.controller('MainCtrl', ['$scope','$http', function ($scope, $http) {
        var ctrl = this;
        var promDates = $http.get("../src/resources/movies.json");
        promDates.then(function(response){
            ctrl.sallesTop = [];
            ctrl.dates = response.data;
            angular.forEach(ctrl.dates, function(data) {
                angular.forEach(data.salles, function(salle) {
                    if(ctrl.sallesTop.indexOf(salle.location) == -1) ctrl.sallesTop.push(salle.location);
                });
            });
        });

    $scope.colorRow = function(index){
        $scope.row = index;
    }


    }]);


