var mod = angular.module('myecomm');

// all Product related services
mod.service("prodServiceAll",['$http','$q',function($http,$q) {
	// return promise object of json data
	this.getAllProducts = function() {
		return $http({method:'GET',url:'http://127.0.0.1:8080/src/data/products.json'});
	}

}]);
