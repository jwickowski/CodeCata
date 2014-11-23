var basket = (function(){
	return function(){
		var 
			items = {},
			getItems = function(){
				var result = [];
				for(var item in items){
					var currentItem = items[item];
					result.push({id: currentItem.id, price: currentItem.price, count: currentItem.count}); 
				}
				return result;
			},
			getPrice = function(){
				var price = 0;

				for(var item in items){
					var currentItem = items[item];
					price += currentItem.price * currentItem.count;
				}
				return price;
			},
			add = function(item){
				var currentItem = items[item.id];
				if(!currentItem){
					currentItem = {price : item.price, count : 1};
					items[item.id] = currentItem;
				} else {
					currentItem.count++;	
				}
				
			},
		 	self = {
				getItems : getItems,
				getPrice : getPrice,
				add: add
			};
		return self;
	};
})();
