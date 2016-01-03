

var userDashboardApp = angular.module('userDashboardApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
userDashboardApp.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
            {
                controller: 'addressController',
                templateUrl: 'view1.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/view2',
            {
                controller: 'addressController',
                templateUrl: 'view2.html'
            })
        .otherwise({ redirectTo: '/view1' });
});




