var app = angular.module('myecomm',['ngRoute','ngCookies']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('!');

	$routeProvider
		.when("/",{
			templateUrl: 'partials/home.html',
			controller:  'home-ctrl'
		})
		.when("/cart",{
			templateUrl: 'partials/cart.html',
			controller:  'cart-ctrl'
		})
		.when("/checkout/:id/:type",{
			templateUrl: 'partials/checkout.html',
			controller:  'checkout-ctrl'
		});																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								
}]);