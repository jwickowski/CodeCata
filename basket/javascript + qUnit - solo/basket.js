var basket = (function(){
	return function(){
		var 
			items = [],
			getItems = function(){
				return items;
			},
			getPrice = function(){
				var price = 0;
				for(var i =0, max = items.length; i< max; i ++){
					price += items[i].price;
				}
				return price;
			},
			add = function(item){
				items.push(item);
			},
		 	self = {
				getItems : getItems,
				getPrice : getPrice,
				add: add
			};
		return self;
	};
})();
