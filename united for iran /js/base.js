// base js 



// angular 
var UFI = angular.module('unitedForIran', ['ngSanitize', 'ui.select'])

// .config(function($interpolateProvider) {
//     $interpolateProvider.startSymbol('{$');
//     $interpolateProvider.endSymbol('$}');
// }, function($httpProvider) {
//     $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// });;






UFI.controller('date', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.days = days;
    $scope.months = months;
    $scope.years = years;
    $scope.months_j = months_j;
    $scope.years_j = years_j;


    // person.selected = {}

    $scope.update = function(e) {
        console.log(e)
      };


    $scope.onSelectDay_j = function(e) {
        var date = toGregorian(1000, 1, parseInt(e.text))
        console.log(date) // this will show the values inside the model, ALWAYS one value behind.
        $scope.day = {
            text: date.jd.toString()
        };
    }
    var day = null;
    var month = null;
    var year = null;
    console.log($scope)
    $scope.onSelectDate = function(d, m, y) {
        console.log(y)

        if (day == null && d != null) {

            day = d;
        } else {
            day = {
                text: '01'
            };

        }


        // var date = toJalaali(parseInt(year.text), parseInt(month.text), parseInt(day.text))
        // console.log(date) // this will show the values inside the model, ALWAYS one value behind.
        // $scope.day_j= {text: date.jd.toString()};
    }



}]);





// helpers

$('.btn-danger').click(function() {

    $('.form-group').toggleClass('has-error')
})


$(document).ready(function() {


    $('.radioBtn').click(function() {
        var groupID = $(this).closest('.form-group').attr('id');
        $('#' + groupID + ' .radioBtn').removeClass('checked');
        $(this).toggleClass('checked');
        var radioBTN = $(this).prev('input');
        if (!radioBTN.is(":checked")) {
            radioBTN.attr('checked', true);
        }
    })


    $('.checkBox').click(function() {
        $(this).toggleClass('checked');
        var radioBTN = $(this).prev('input'),
            isChecked = radioBTN.attr('checked')
        if (isChecked == 'checked') {
            radioBTN.removeAttr('checked');
        } else {
            radioBTN.attr('checked', '');
        }
    })


    $('.toggleSection').click(function() {
        $(this).parent().parent().children('.sectionHide').slideToggle();

    })


    $('.dropdownMenu li').click(function() {


    })


    var date = toJalaali(2015, 1, 1);
    console.log(date)
        // var yearObj = []

    // years.forEach(function(entry) {
    //     var date = toJalaali(parseInt(entry.text), 1, 1);

    //     yearObj.push({
    //         text: date.jy.toString()
    //     })




    // });

    // console.log(JSON.stringify(yearObj))

})




'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */
