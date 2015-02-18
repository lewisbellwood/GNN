var signup = angular.module('signup', []);
signup.controller('signupFormCtrl', function($scope, $http) {
    $scope.submitForm = function() {
        $http({
            url: "postSignup",
            data: $scope.form,
            method: 'POST'
        }).success(function(data) {
            console.log(data)
        }).error(function(err) {
            "ERR", console.log(err)
        })
    };

});


var createArticle = angular.module('createArticle', ['angularFileUpload']);
createArticle.controller('createArticleCtrl', function($scope, $http) {
    $scope.submitForm = function() {
      console.log($scope.form)
        $http({
            url: "postArticle",
            data: $scope.form,
            method: 'POST'
        }).success(function(data) {
            console.log(data)
        }).error(function(err) {
            "ERR", console.log(err)
        })
    };

});



var latestArticle = angular.module('latestArticle', []);
latestArticle.controller('latestArticleCtrl', function($scope, $http) {

    $scope.articles = []

        $http({
            url: "latestArticle",
            method: 'GET'
        }).success(function(data) {
            console.log(data)
            $scope.articles = data; 
        }).error(function(err) {
            "ERR", console.log(err)
        })

});
