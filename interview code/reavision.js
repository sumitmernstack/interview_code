//call bind apply
//we use when we want to add method to Object,so that we can we reuse ImageTrack


let teacher = {
    name: "sumit",
    lname: "kesahri",
    fullname: function name() {
        return this.name + this.lname
    }
}

function subject(val1,val2) {
    return `${val1},${val2}`
}

console.log(subject.call(teacher,"math","evs"))
console.log(subject.apply(teacher,["math","evs"]))


console.log()teacher.
