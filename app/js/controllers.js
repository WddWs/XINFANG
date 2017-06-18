var routerCtrl = angular.module('routerCtrl', []);
routerCtrl.controller('helloCtrl', ['$scope', function($scope) {
    $(function() {
        $('.table-hover  a').on('click', function() {
            $('#secondmodal').modal();
        });
        $('#tuihui').on('click', function() {
            $('#thirdmodal').modal();
        });

    });

    $('.menu-one').css('background-color', '#A6E9FF');
    $(".menu-ul > li:not('.menu-one')").css('background-color', '#fff');

}]);

routerCtrl.controller('anaCtrl', ['$scope', function($scope) {


    $('.menu-two').css('background-color', '#A6E9FF');
    $(".menu-ul > li:not('.menu-two')").css('background-color', '#fff');

}]);
routerCtrl.controller('ziliaoCtrl', ['$scope', function($scope) {

    $('.menu-three').css('background-color', '#A6E9FF');
    $(".menu-ul > li:not('.menu-three')").css('background-color', '#fff');

}]);

routerCtrl.controller('gonggaoCtrl', ['$scope', function($scope) {


    $('.menu-four').css('background-color', '#A6E9FF');
    $(".menu-ul > li:not('.menu-four')").css('background-color', '#fff');

}]);
