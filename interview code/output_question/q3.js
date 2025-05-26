
var a = 21;
 
(() => {

  console.log(a); // undefine

  var a = 25

  console.log(a);  //25

})();

  console.log(a); //21

  /**
   * First console.log(a);: When the first console.log(a);
   *  is executed, the local a has already been declared due to hoisting, but it hasn't been assigned the value 25 yet. Therefore, its value is undefined at this point.

Second console.log(a);: After the local variable a is initialized with the value 25, the second console.log(a); prints 25.
   */