var basket = (function(){
	return function(){
		var 
			items = {},
			inserter = basketInserter(items);
			remover = basketRemover(items);
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
				for(var key in items){
					var currentItem = items[key];
					func(currentItem);
				}
			};

		 	var self = {
				getItems : getItems,
				getPrice : getPrice,
				add: inserter.insert,
				remove: remover.remove
			};
		return self;
	};
})();
