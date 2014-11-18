QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "calculator exists", function( assert ) {
if(calculator) {
  assert.ok( true, "Passed!" );
  }
  else{
   assert.ok( false, "Fail!" );
  }
});

QUnit.test( "fail test", function( assert ) {
   assert.ok( false, "Fail!" );
});