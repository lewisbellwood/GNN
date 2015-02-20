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
createArticle.controller('createArticleCtrl', function($scope, $upload) {

    $scope.form = []
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: '/postArticle',
                    fields: $scope.form,
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' +
                                evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' +
                                JSON.stringify(data));
                });
            }
        }
    };
    

})

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


//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['angularFileUpload']);

app.controller('MyCtrl', ['$scope', '$upload', function ($scope, $upload) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: '/uploading',
                    fields: {
                        'username': $scope.username
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' +
                                evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' +
                                JSON.stringify(data));
                });
            }
        }
    };
}]);