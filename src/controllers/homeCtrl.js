angular.module('myecomm').controller("home-ctrl",['$scope','$location','prodServiceAll', function($scope,$location,prodServiceAll){

 // retrieve items from the response of products json (promise)	
 prodServiceAll.getAllProducts().then(
 	function(res) {
 		// store the response into products
 		$scope.products = res.data.products;
 	}
 );


 // buy now will goes to checkout page
 $scope.buynow = function(id) {
 	$location.path('/checkout/'+id+'/buynow');
 }
}]);