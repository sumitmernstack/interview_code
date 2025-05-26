function foo(x) {
    if (x) {
      return x;
    } else if (arguments.length) {
      return arguments[0];
    }
   }
   console.log(foo());
   console.log(foo(undefined));
   console.log(foo(null));
   console.log(foo(5));
   
