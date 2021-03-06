angular.module('myecomm').controller("checkout-ctrl",['$scope','$location','$routeParams','prodServiceAll', function($scope,$location,$routeParams,prodServiceAll){

	$scope.type = $routeParams.type;

	 // retrieve items from the response of products json (promise)	
	prodServiceAll.getAllProducts().then(
	 	function(res) {
	 		// store the response into products
	 		$scope.prod = res.data.products[$routeParams.id];
		}
	);

	if($scope.type=="checkout") {
		$scope.prod = localStorage.getItem("myCart");
	}

	$scope.submitForm = function() {

			alert("Your Order has been processed successfully");
			$location.path("/");
	}
	  

}]);