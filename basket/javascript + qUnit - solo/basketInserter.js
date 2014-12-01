basketInserter = (function(){
	return function(basketItems) {
		var 
			insert = function(item, count){
				if(!count){
					count  = 1;
				}
				var currentItem = basketItems[item.id];
				if(!currentItem) {
					currentItem = {price : item.price, count : count};
					basketItems[item.id] = currentItem;
				} else {
					if(currentItem.price !== item.price){
						throw "You can't add items with the same id and different price.";
					}
					currentItem.count++;	
				}
			},
			
		that = {
			insert: insert
		};

		return that;
	};
})();