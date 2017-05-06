angular.module('myecomm').controller("home-ctrl",['$scope','$rootScope','$location','$window','prodServiceAll',	'Cart', function($scope,$rootScope,$location,$window,prodServiceAll,Cart){
	 $scope.cart = Cart.getCart();

	 // retrieve items from the response of products json (promise)	
	 prodServiceAll.getAllProducts().then(
	 	function(res) {
	 		// store the response into products
	 		$scope.products = res.data.products;
	 	}
	 );

	 // add to cart
	 $scope.addProduct = function(index) {
	 	Cart.addItem($scope.products[index]);
	 }

	 $rootScope.$on('onCartUpdate', function() {
        $scope.$apply(function()  {
          $scope.cart = Cart.getCart();
        });
     });

	 // buy now will goes to checkout page
	 $scope.buynow = function(id) {
	 	$location.path('/checkout/'+id+'/buynow');
	 }
	 
}]);