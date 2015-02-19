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


var createArticle = angular.module('createArticle', []);
createArticle.controller('createArticleCtrl', function($scope, $http) {

    $scope.form = []
    $scope.submitForm = function() {
        
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
    $scope.model = {
        name: "",
        comments: ""
    };

    //an array of files selected
    $scope.files = [];

    $scope.$on("fileSelected", function(event, args) {
        $scope.$apply(function() {
            //add the file object to the scope's files collection
            $scope.files.push(args.file);
            $scope.form.mainImage = $scope.files;
        });
    });

}).directive('fileUpload', function() {
    return {
        scope: true, //create a new scope
        link: function(scope, el, attrs) {
            el.bind('change', function(event) {
                var files = event.target.files;
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0; i < files.length; i++) {
                    //emit event upward
                    scope.$emit("fileSelected", {
                        file: files[i]
                    });
                }
            });
        }
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
