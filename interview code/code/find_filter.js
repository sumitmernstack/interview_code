
//crfeate a array which are having same relation from the two array
let arr_emp = [
    {
        id: 1,
        name: "sk",
        dept_id: 101
    },
    {
        id: 2,
        name: "ak",
        dept_id: 102
    }
]

let arr_dept = [
    {
        dept_id: 101,
        dept_name: "it"
    },
    {
        dept_id: 102,
        dept_name: "hf"
    }

]

function arr_merge_find_filter(arr1, arr2) {
    let comm_array = []

    arr1.filter((ele) => {

        arr2.find((x) => {
            if (ele.dept_id == x.dept_id) {

                let obj = {
                    id: ele.id,
                    name: ele.name,
                    dept_name: x.dept_name
                }
                comm_array.push(obj)
            }
        })
    })


    return comm_array

}
console.log(arr_merge_find_filter(arr_emp, arr_dept))


function arr_merge_for(arr1, arr2) {
    let comm_array = []

   for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].dept_id == arr2[j].dept_id) {

            let obj = {
                id: arr1[i].id,
                name: arr1[i].name,
                dept_name: arr2[j].dept_name
            }
            comm_array.push(obj)
        }

    }

}


    return comm_array

}

console.log(arr_merge_for(arr_emp, arr_dept))