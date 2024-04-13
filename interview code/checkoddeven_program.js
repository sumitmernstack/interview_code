let arr = [2, 36, 7, 7, 9]
function addundersore(arr) {
    let tmp = ""
    let order_flag = "even"

    for (const i of arr) {

        // if (order_flag == "even") {

        // }
        let value = ""

        if (i % 2 == 0) {
            value = "e"
        } else {
            value = "o"
        }
        console.log(value, order_flag)
        if (order_flag == "even" && value == "e") {

            tmp += i + "_"
            order_flag == "odd"

        } else if (order_flag == "even" && value == "o") {
            tmp += i
        }
        else if (order_flag == "odd" && value == "e") {
            tmp += i
            order_flag == "even"
        } else if (order_flag == "odd" && value == "o") {
            tmp += i + "_"
        }



    }


    return tmp
}

//console.log(addundersore(arr))


let array = [2, 36, 7, 7, 9]
function check_even_odd(array) {
  
    let str=""
    for (const iterator of array) {
        let flag = true;
        if (iterator % 2 == 0) {
            let check_flag = true
        }else{
            let check_flag = false
        }

        if(flag == check_flag){

            str += iterator + "_"
            flag=false
        }else{
            str += iterator 
            flag=true
        }
    }
    return str
}

console.log(check_even_odd(array))