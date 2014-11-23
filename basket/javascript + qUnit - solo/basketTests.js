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
	var product = {price : 10};
	newBasket.add(product);

	assert.equal(1, newBasket.getItems().length);
	assert.equal(10, newBasket.getPrice());
});

QUnit.test("add two product", function( assert ) {
	var newBasket = basket();
	var product1 = {price : 10};
	var product2 = {price : 5};

	newBasket.add(product1);
	newBasket.add(product2);

	assert.equal(2, newBasket.getItems().length);
	assert.equal(15, newBasket.getPrice());
});


