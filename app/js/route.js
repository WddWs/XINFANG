var routerApp = angular.module('routerApp', ['ui.router', 'routerCtrl', 'appDirectives']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls/topbar.html'
                },
                'main@index': {
                    templateUrl: 'tpls/home.html',
                    controller: 'helloCtrl'
                },
                'addform@index': {
                    templateUrl: 'tpls/addform.html'
                },
                'lookfor@index': {
                    templateUrl: 'tpls/lookfor.html'
                },
                'judge@index': {
                    templateUrl: 'tpls/judge.html'
                },
                'upup@index': {
                    templateUrl: 'tpls/upup.html'
                }
            }
        }).state('index.first', {
            url: '/first',
            views: {

                'main@index': {
                    controller: 'anaCtrl',
                    templateUrl: 'tpls/usermng.html'
                }
            }
        }).state('index.two', {
            url: '/two',
            views: {

                'main@index': {
                    controller: 'ziliaoCtrl',
                    templateUrl: 'tpls/ziliao.html'
                },
                'addZiliao@index.two': {
                    templateUrl: 'tpls/addZiliao.html'
                }
            }
        }).state('index.three', {
            url: '/three',
            views: {

                'main@index': {
                    controller: 'gonggaoCtrl',
                    templateUrl: 'tpls/gonggao.html'
                },
                'addGonggao@index.three': {
                    templateUrl: 'tpls/addGonggao.html'
                }
            }
        });

});
