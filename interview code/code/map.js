// let array = [2, 5, 3, 4, 8, 1]

// function tets_map(arr) {

//     let tmp = arr.map((x) => x * 5)
//     return tmp
// }

// console.log(tets_map(array))


const people = [
    { last_name: 'Doe', age: 25 },
    { last_name: 'Smith', age: 30 },
    { last_name: 'Johnson', age: 40 },
    { last_name: 'Williams', age: 35 },
    { last_name: 'Brown', age: 45 }
];

function name_map(arr) {

    let tmp = arr.filter((x)=> x.age>30).map((x)=>x.last_name) // arr.map((x) => x.last_name )
    return tmp
}


console.log(name_map(people))


function map_test(){
    let t=people.filter((a)=>a.age  >30).map((x)=>{
         
      return  x.last_name + x.age
    })

    return t 
}

console.log( map_test())