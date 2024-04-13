function recun(num) {
    if(num ==0){
        return 1
    }
    else{
        return   num * recun(num - 1)
    }   
}

console.log(recun(5))