var basketRemover = (function(){
	return function(basketItems) {
		var 
			remove = function(id, count){
				if(!count){
					count = 1;
				}
				var currentItem = basketItems[id];
				if(!currentItem){
					throw "The items with id does not exist.";
				}
				currentItem.count -= count;
				if(currentItem.count <= 0){
					delete basketItems[id];
				}
			},
			
		that = {
			remove: remove
		};

		return that;
	};
})();