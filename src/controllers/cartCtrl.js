angular.module('myecomm').controller("cart-ctrl",['$scope','$rootScope','$location','prodServiceAll', function($scope,$rootScope,$location,prodServiceAll){

	$scope.cartItems = $rootScope.cart;
	console.log($scope.cartItems);

}]);