var signup = angular.module('myApp', []);

signup.controller('FormCtrl', function($scope, $http) {

    var formData = {
        username: 'misha',
        name: 'Misha Davinpour',
        password: '123456',
        dob: '10/02/1989',
        gender: '1',
        location: 'london',
        about: 'I am the first user of gnn'
    }


    $scope.submitForm = function() {

        console.log($scope.form);

        $http({

            url: "postsignup",
            data: $scope.form,
            method: 'POST'

        }).success(function(data) {

            console.log("OK", data)

        }).error(function(err) {
            "ERR", console.log(err)
        })
    };

});
