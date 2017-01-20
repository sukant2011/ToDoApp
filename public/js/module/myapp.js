var app =angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	 when('/create', {
        templateUrl: 'js/views/pages/addtask.html',
        controller: 'taskController'
    }).
     when('/overdue', {
        templateUrl: 'js/views/pages/overdue.html',
        controller: 'taskController'
    }).
      otherwise( {
        redirectTo: '/create' 
      })

     
}]);