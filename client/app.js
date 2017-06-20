var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'templates/list.html',
		controller:'empController2'
	})
	.when('/employees', {
		templateUrl:'templates/list.html',
		controller:'empController2'
	})
	.when('/employees/create', {
		templateUrl:'templates/create.html',
		controller:'empController2'
	})
	.when('/employees/:id/edit', {
		templateUrl:'templates/edit.html',
		controller:'empController2'
	})
	.when('/employees/:id/show', {
		templateUrl:'templates/show.html',
		controller:'empController2'
	});
});

