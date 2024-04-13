
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





