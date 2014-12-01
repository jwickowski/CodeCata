var basketRummager = (function(){
	return function(basketItems) {
		var 
			getItems = function(){
				var result = [];
				enumerableInItems(function(item){
					result.push({id: item.id, price: item.price, count: item.count}); 
				});
				return result;
			},
			getPrice = function(){
				var price = 0;
				enumerableInItems(function(item){
					price += item.price * item.count;
				});
				return price;
			},
			enumerableInItems = function(func){
				for(var key in basketItems){
					var currentItem = basketItems[key];
					func(currentItem);
				}
			};

		return {
getItems:getItems,
getPrice:getPrice
		};
	};
})();