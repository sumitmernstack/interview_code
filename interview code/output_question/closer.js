var x = 23;

(function(){
  var x = 43;  // This x is local to the IIFE
  
  (function random(){
    console.log(x);  // Logs undefined due to hoisting
    x++;             // x is undefined here, so x++ results in NaN
    console.log(x);  // Logs NaN
    var x = 21;      // Local x is declared and initialized to 21
  })();

})();
