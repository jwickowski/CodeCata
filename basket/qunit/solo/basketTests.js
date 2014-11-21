QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "basket exists", function( assert ) {
if(basket) {
  assert.ok( true, "Passed!" );
  }
  else{
   assert.ok( false, "Fail!" );
  }
});

QUnit.test( "fail test", function( assert ) {
   assert.ok( false, "Fail!" );
});