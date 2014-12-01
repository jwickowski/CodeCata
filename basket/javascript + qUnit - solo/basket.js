var basket = (function(){
	return function(){
		
		var items = {};
		
		var	inserter = basketInserter(items);
		var remover = basketRemover(items);
		var rummager = basketRummager(items);
		
		var	self = {
				getItems : rummager.getItems,
				getPrice : rummager.getPrice,
				add: inserter.insert,
				remove: remover.remove
			};
		return self;
	};
})();
