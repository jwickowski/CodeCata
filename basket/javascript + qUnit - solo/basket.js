var basket = (function(){
	return function(){
		var 
			getItems = function(){
				return [];
			},
			getPrice = function(){
				return 0;
			},


		 	self = {
				getItems : getItems,
				getPrice : getPrice
			};
		return self;
	};
})();
