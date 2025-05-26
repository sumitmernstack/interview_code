//map can return can be return but forEach cannot return undefine.

// normal
let a=[1,2,3,4,56,89]

a.map((x)=>console.log(x))

a.forEach(element => {
    console.log(element)
});

// with return 
let b=[5,4,3,2,1]
let mar_res=a.map((y)=>{return y})

console.log(mar_res)

let foreach_res=a.forEach((y)=>{
    return y
})

console.log(foreach_res)

