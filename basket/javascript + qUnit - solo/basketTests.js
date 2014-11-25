QUnit.module("basket", {
	setup: function(){
		this.basket = basket();
	}
});

QUnit.test("new basket have correctly initial data", function( assert ) {
	
	assert.ok(this.basket);
	var items = this.basket.getItems();
	assert.ok(items);
	assert.equal(0, items.length);
	var price = this.basket.getPrice();
	assert.equal(0, price);
});

QUnit.test("add one product", function( assert ) {
	
	var product = {id : 1, price : 10};
	this.basket.add(product);

	assert.equal(1, this.basket.getItems().length);
	assert.equal(10, this.basket.getPrice());
});

QUnit.test("add two difference product", function( assert ) {
	
	var product1 = {id: 1, price : 10};
	var product2 = {id: 2, price : 5};

	this.basket.add(product1);
	this.basket.add(product2);

	assert.equal(2, this.basket.getItems().length);
	assert.equal(15, this.basket.getPrice());
});

QUnit.test("add two the same products", function( assert ) {
	var product1 = {id: 1, price : 10};
	var product2 = {id: 1, price : 10};

	this.basket.add(product1);
	this.basket.add(product2);

	assert.equal(1, this.basket.getItems().length);
	assert.equal(20, this.basket.getPrice());
});

QUnit.test("add two the same products in one method", function( assert ) {
	var product = {id: 1, price : 10};

	this.basket.add(product, 2);

	var items = this.basket.getItems();
	assert.equal(1, items.length);
	assert.equal(20, this.basket.getPrice());
	assert.equal(2, items[0].count);
});

QUnit.test("add the same product with diferent price", function( assert ) {
	var product1 = {id: 1, price : 10};
	var product2 = {id: 1, price : 99};

	this.basket.add(product1);
	assert.throws(function(){
		this.basket.add(product2);	
	});
});

QUnit.test("remove one item when tow are in basket", function( assert ) {
	var product = {id: 1, price : 10};

	this.basket.add(product);
	this.basket.add(product);
	this.basket.remove(1);
	assert.equal(1, this.basket.getItems().length);
});

QUnit.test("remove one item when one is in basket", function( assert ) {
	var product = {id: 1, price : 10};

	this.basket.add(product);
	this.basket.remove(1);
	assert.equal(0, this.basket.getItems().length);
});

QUnit.test("remove two items when two in one method", function( assert ) {
	var product = {id: 1, price : 10};

	this.basket.add(product,2 );
	this.basket.remove(1,2 );
	assert.equal(0, this.basket.getItems().length);
});


QUnit.test("remove multiple item", function( assert ) {
	var product = {id: 1, price : 10};

	this.basket.add(product);
	this.basket.remove(1);
	assert.equal(0, this.basket.getItems().length);
});


QUnit.test("remove items which not exists", function( assert ) {
	assert.throws(function(){
		this.basket.remove(1);
	});
});

QUnit.test("removing items when count is greathen then it is", function( assert ) {
	var product = {id: 1, price : 10};

	this.basket.add(product,2);
	this.basket.remove(1,3);
	assert.equal(0, this.basket.getItems().length);
});
