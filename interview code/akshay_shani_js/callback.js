
let cart = ["laptop", "mobile", "pendrive", "keyboard"]

//  creteorder---> payment----> summary -----> invoice
//shoping cart
api.creteorder(cart, function () {

    api.payment(function () {
        api.summary(function () {
            api.invoice()
        }
        )
    })
})

//disadvantage
//1) callback hell(nested function)-->
//the return of that function is passed as parameter to other function.
//2)inversion of control---> may loose control over code
//(because we dont know wheather our code will run or nor)



// --> 

//we are on flipkart
//  order,payment ,symmary ,invoice
let shoppingCart = ["tshirt", "pant", "saree", "tie"];

order(shoppingCart, (orderinfo) => {
    payment(orderinfo, (paymentinfo) => {
        summary(paymentinfo, (summarydetails) => {
            invoice(() => {
                // Invoice logic
            });
        });
    });
});

//callback to promise


// Assuming order, payment, summary, and invoice are promise-based
order(shoppingCart)
  .then((orderinfo) => payment(orderinfo))
  .then((paymentinfo) => summary(paymentinfo))
  .then((summarydetails) => invoice(summarydetails))
  .catch((error) => {
    console.error("An error occurred:", error);
  });


// Assuming order, payment, summary, and invoice return promises
async function processOrder() {
    try {
        const orderinfo = await order(shoppingCart);
        const paymentinfo = await payment(orderinfo);
        const summarydetails = await summary(paymentinfo);
        await invoice(summarydetails);
        console.log("Order processed successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the async function
processOrder();



