//prime no

function sort(str) {
    let string = str.toLowerCase();
    let ana_string = string.split("").sort().join("")
    return ana_string
}

function anagram(str1, str2) {
    let string1 = sort(str1)
    // console.log("string1",string1)

    let string2 = sort(str2)
    //   console.log("string2",string2)
    if (string1 == string2) {
        console.log("string are anagram")
    } else {
        console.log("string are not anagram")
    }
}

anagram("submit", "umibts")
