// we use protot-type, when we want to in herit object from another object
let student={name:"sumit",
    lastname:"keshari",
    age:"25"
}


let teacher={name:"golu",
    lastname:"keshari",
    age:"29"
}

let user={
    getfullname: function () {
        return `${this.name} ${this.lastname} `
        
    },
    getemail:function () {
           return `${this.name}+${this.lastname}@test.com `
    }
}

student.__proto__=user
console.log(student.getfullname())