angular.module('myecomm').controller("cart-ctrl",['$scope','$rootScope','$location','prodServiceAll', function($scope,$rootScope,$location,$window,prodServiceAll){

	var cartitms = localStorage.getItem("myCart");
	$scope.cartItems = JSON.parse(cartitms);

	// buy now will goes to checkout page
	 $scope.checkout = function() {
	 	$location.path('/checkout/0/checkout');
	 }

}]);