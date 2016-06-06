/**
 * Created by Siraj on 2016-06-06.
 */
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'messageCtrl'
        })

}]);