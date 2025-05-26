let obj1 = {
    key: "javascript"
  };
  let obj2 = obj1; // obj2 is now a reference to obj1
  let obj3 = obj2; // obj3 is now also a reference to obj1 (the same object)
  
  obj1.key = "python"; // This changes the key property of obj1, obj2, and obj3 since they all reference the same object
  obj2 = { // Now, obj2 is reassigned to a new object
    key: "ruby"
  };
  
  console.log(obj1.key, obj2.key, obj3.key);
  
  // python ruby python

  