angular.module('myecomm').controller("home-ctrl",['$scope','$rootScope','$location','$window','prodServiceAll', function($scope,$rootScope,$location,$window,prodServiceAll){
	 $scope.cart = [];

	 // retrieve items from the response of products json (promise)	
	 prodServiceAll.getAllProducts().then(
	 	function(res) {
	 		// store the response into products
	 		$scope.products = res.data.products;
	 	}
	 );

	 // add to cart
	 $scope.addProduct = function(index) {
	 	$scope.cart.push($scope.products[index]);
	 	var cartitem = localStorage.getItem("myCart");
	 	
	 	localStorage.setItem("myCart",JSON.stringify($scope.cart));
	 	
	 	var itm = localStorage.getItem("myCart");

	 	console.log(itm);
	 	alert("New item added in cart");
	 }

	 // buy now will goes to checkout page
	 $scope.buynow = function(id) {
	 	$location.path('/checkout/'+id+'/buynow');
	 }
	 
}]);