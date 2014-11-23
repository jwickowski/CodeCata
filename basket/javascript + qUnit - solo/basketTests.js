QUnit.test( "basket should exist", function( assert ) {
if(basket) {
  assert.ok( true, "Passed!" );
  }
  else{
   assert.ok( false, "Fail!" );
  }
});
