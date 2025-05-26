// we use protot-type, when we want to in herit object from another object
let student = {
    name: "sumit",
    lastname: "keshari",
    age: "25"
}


let teacher = {
    name: "golu",
    lastname: "keshari",
    age: "29"
}

let user = {
    getfullname: function () {
        return `${this.name} ${this.lastname} `

    },
    getemail: function () {
        return `${this.name}+${this.lastname}@test.com `
    }
}

student.__proto__ = user
console.log(student.getfullname())

//reavision
//when we want to inherit object from other object
let st = {
    f: "sumit",
    l: "kesahri",
    age: "40"
}

let us = {
    fullname: function () {
        return `${this.f}${this.l}`
    },
    getemail: function () {
        return `${this.f}${this.l}@gmail.com`
    }
}

st.__proto__=us
console.log(st.fullname(), st.getemail())

