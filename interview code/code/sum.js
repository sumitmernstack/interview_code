
function sum(arr) {
    let sum_num=0
    for (let i = 0; i < arr.length; i++) {
        sum_num=sum_num + arr[i]
        
    }
    console.log(sum_num)
}
sum([1,2,3,4,5,6,7,8,9,0])
//reduce function
let array=[1,2,3,4,5,6,7,8,9,10,11]

const red_sum=array.reduce((a,c)=>{
return a=a+c
},0)
console.log(red_sum)

const max_no=array.reduce((a,c)=>{
    return a
    },0)
    console.log(red_sum)