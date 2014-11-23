QUnit.test("basket should exist", function( assert ) {
	if(basket) {
  		assert.ok( true, "Passed!" );
  	}
  		else{
   		assert.ok( false, "Fail!" );
	}
});

QUnit.test("When I create new basket then it should be notNull, empty and price should be 0", function( assert ) {
	var newBasket = basket();
	assert.ok(newBasket);
	var items = newBasket.getItems();
	assert.ok(items);
	assert.equal(0, items.length);
	var price = newBasket.getPrice();
	assert.equal(0, price);
});

QUnit.test("When I add one product to basket then one product should be in basket and price should be correct", function( assert ) {
	var newBasket = basket();
	var product = {price : 10};
	newBasket.add(product);

	assert.equal(1, newBasket.getItems().length);
	assert.equal(10, newBasket.getPrice());
});
