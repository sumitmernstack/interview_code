

let arr = [36, 4, 7, 23, 7, 9]

function check(arr) {
    let even=0;
        let odd=0;
    for (let i = 0; i < arr.length; i++) {
       if(i ==0){
        even=1
       }

        if(even){
            if (arr[i] % 2 == 0) {
                console.log(arr[i] ,"_")
            } else {
                console.log(arr[i])
            }
        }else if(odd){
            console.log(arr[i])
        }

        if(even ==1){
            
            even=0
        }else{
            even=1
        }

        if(odd ==1){
            odd=0
        }else{
            odd=1
        }

    }
}
check(arr)