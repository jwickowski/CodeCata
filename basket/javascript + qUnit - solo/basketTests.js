QUnit.test("basket should exist", function( assert ) {
	if(basket) {
  		assert.ok( true, "Passed!" );
  	}
  		else{
   		assert.ok( false, "Fail!" );
	}
});

QUnit.test("new basket have correctly initial data", function( assert ) {
	var newBasket = basket();
	assert.ok(newBasket);
	var items = newBasket.getItems();
	assert.ok(items);
	assert.equal(0, items.length);
	var price = newBasket.getPrice();
	assert.equal(0, price);
});

QUnit.test("add one product", function( assert ) {
	var newBasket = basket();
	var product = {id : 1, price : 10};
	newBasket.add(product);

	assert.equal(1, newBasket.getItems().length);
	assert.equal(10, newBasket.getPrice());
});

QUnit.test("add two difference product", function( assert ) {
	var newBasket = basket();
	var product1 = {id: 1, price : 10};
	var product2 = {id: 2, price : 5};

	newBasket.add(product1);
	newBasket.add(product2);

	assert.equal(2, newBasket.getItems().length);
	assert.equal(15, newBasket.getPrice());
});

QUnit.test("add two the same products", function( assert ) {
	var newBasket = basket();
	var product1 = {id: 1, price : 10};
	var product2 = {id: 1, price : 10};

	newBasket.add(product1);
	newBasket.add(product2);

	assert.equal(1, newBasket.getItems().length);
	assert.equal(20, newBasket.getPrice());
});

QUnit.test("add the same product with diferent price", function( assert ) {
	var newBasket = basket();
	var product1 = {id: 1, price : 10};
	var product2 = {id: 1, price : 99};

	newBasket.add(product1);
	assert.throws(function(){
		newBasket.add(product2);	
	});
});

QUnit.test("remove one item when one is in bask", function( assert ) {
	var newBasket = basket();
	var product = {id: 1, price : 10};

	newBasket.add(product);
	newBasket.add(product);
	newBasket.remove(1);
	assert.equal(1, newBasket.getItems().length);
});

QUnit.test("remove one item when one is in bask", function( assert ) {
	var newBasket = basket();
	var product = {id: 1, price : 10};

	newBasket.add(product);
	newBasket.remove(1);
	assert.equal(0, newBasket.getItems().length);
});


