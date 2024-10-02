

console.log("1");

const v = (getDetail("2"))

console.log(v)

/**
 * const v = (getDetail("2")): This calls getDetail with "2" as the argument.
 * getDetail returns a promise (because of async in the setTimeout callback).
 * Since you haven't used await or .then(), v will be assigned a pending promise.

console.log(v): Since v is a promise that hasn’t been resolved yet, 
it will print Promise { <pending> }.
 */

console.log("3");

 function getDetail(id){ 

  setTimeout(async () => {

    console.log(id)

    return await id;

  }, 2000);
}

//op ----> 1,undefine(pending),3,2