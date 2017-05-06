var mod = angular.module('myecomm');

// all Product related services
mod.service("prodServiceAll",['$http','$q',function($http,$q) {
	// return promise object of json data
	this.getAllProducts = function() {
		return $http({method:'GET',url:'http://127.0.0.1:8080/src/data/products.json'});
	}

}]);

mod.service('Cart', ['$rootScope', 'Storage', function ($rootScope, Storage) { 
      var that = this;
    
      $rootScope.$on('onStorageModify', function()  {
        that.refresh();
      });
    
      this._cart = {};
    
      this._cartLookUp = function(id)  {
        return this._cart.hasOwnProperty(id) ? true : false;
      }
    
      this.getCart = function(){
        this._cart = Storage.fetch();
        if(!this._cart) { this._cart = {}; }
        
        return this._cart;
      };
  
      this.addItem = function(product){
        if(this._cartLookUp(product.id))  {
          this.changeQuantity(product.id);
        }else {
          this._newItem(product);
        }
        
        this.save();
      };
      
      this._newItem = function(product)  {
        product.quantity = 1;
        this._cart[product.id] = product;
      };
  
      this.addItems = function(products) {
        angular.forEach(products, function(product) {
          this.addItem(product);
        }, this);
      };
  
      this.save = function() {
        Storage.save(this._cart);
      };
  
      this.remove = function (id) {
        if(!--this._cart[id].quantity) { delete this._cart[id]; }
        this.save();
      };
  
      this.clear = function() {
        this._cart = {};
        Storage.remove();
      };
  
      this.persist = function() {};
  
      this.changeQuantity = function (id){
        this._cart[id].quantity++;
      };
  
      this.refresh = function() {
        $rootScope.$broadcast('onCartUpdate')
      };

  }]);

mod.provider('Storage', function ()  {
    
    var identifier;
    
    return {
      setSourceIdentifier : function(id) {
        identifier = id;
      },
      
      $get : ['$rootScope', '$window', function($rootScope, $window) {
        
        angular.element($window).on('storage', function (event) {
          if (event.key === identifier) {
            $rootScope.$broadcast('onStorageModify');
          }
        });
        
        return {
          save : function(data)  {
            localStorage.setItem(identifier, JSON.stringify(data));
          },
      
          fetch : function() {
            return localStorage.getItem(identifier);
          },
      
          remove : function()  {
            localStorage.removeItem(identifier);
          }
        };
      }]
    }
  });

mod.config(function(StorageProvider)  {
    StorageProvider.setSourceIdentifier('cart');
  });

