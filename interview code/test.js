
// // // // let a = "hi my name is sumit"
// // // // // // [hi, my, name ,is .sumit]
// // // // // // [ih]

// // // // // // //[ih, ym]
// // // // // // //[[h,i],[y,m]]
// // // // // function reverse(str) {
// // // // //     let tmp = [];
// // // // //     let string_length = str.split(" ");
// // // // // //console.log(string_length)
// // // // //     for (let i = 0; i < string_length.length; i++) {
// // // // //         let nested_split = string_length[i].split("");
// // // // //      //  console.log(nested_split.length)
// // // // //        let tmp_arr = [];
// // // // //         for (let j = 0; j < Math.floor(nested_split.length/2); j++) {
// // // // //             let tmp_val=nested_split[j];
// // // // //             nested_split[j]=nested_split[nested_split.length-1-i]
// // // // //             nested_split[nested_split.length-1-i]=tmp_val
// // // // //           //  console.log(nested_split)
// // // // //            // let value={val:nested_split.join("")};
// // // // //             //console.log(value)
// // // // //            // tmp_arr.push(value)
// // // // //         }
// // // // //         tmp_arr.push(nested_split)
// // // // //       // console.log(tmp_arr)

// // // // //        tmp.push(tmp_arr)
// // // // //       //  tmp.push(tmp_arr)
// // // // //     }

// // // // //     tmp=tmp.flat('')
// // // // //    return tmp
// // // // // }


// // // // // console.log(reverse(a))
// // // // // //memory a=undefine
// // // // // //code



// // // // // function reverseWords(str) {
// // // // //     // Split the string into an array of words
// // // // //     let words = str.split(' ');

// // // // //     // Iterate through each word and reverse it
// // // // //     for (let i = 0; i < words.length; i++) {
// // // // //       // Split each word into an array of characters, reverse it, and join it back
// // // // //       words[i] = words[i].split('').reverse().join('');
// // // // //       console.log(words[i])
// // // // //     }

// // // // //     // Join the reversed words back into a string
// // // // //     return words//.join(' ');
// // // // //   }

// // // // //   // Test the function
// // // // //   let originalString = "hi my name is sumit";
// // // // //   let reversedString = reverseWords(originalString);
// // // // //   console.log(reversedString); // Output: "ih ym eman si timus"


// // // // //let var const
// // // // //execution context
// // // // //revese a string

// // // // function reverse(params) {
// // // //     let word = params.split(" ")
// // // //     // console.log("__--", word)
// // // //     for (let i = 0; i < word.length; i++) {
// // // //         word[i] = word[i].split("").reverse().join("")
// // // //         console.log(word)
// // // //     }
// // // //     return word.join(" ")
// // // // }

// // // // console.log(reverse(a))

// // // function sortarr(arr) {
// // // //console.log(arr)
// // //     for (let i = 0; i < arr.length - 1; i++) {
// // //         for (let j = 0; j<arr.length - 1 - i; j++) {
// // //             if (arr[j] > arr[j + 1]) {
// // //                 let tmp = arr[j]
// // //                 arr[j] = arr[j + 1]
// // //                 arr[j + 1] = tmp
// // //             }
// // //         }
// // //     }

// // //     return arr1
// // // }
// // // let arr1 = [11, 22, 3, 4, 5, 1, 288, 445, 12]
// // // console.log(sortarr(arr1))

// // // // let a=arr1.sort((a,b)=>a-b)
// // // // console.log(a)

// // // function a(array){
// // //     for (let i = 0; i < array.length-1; i++) {
// // //         for (let j = 0; j < array.length-1-i; j++) {
// // //           if(array[j]>array[j+1]){
// // //             let tmp=array[j]
// // //             array[j]=array[j+1]
// // //             array[j+1]=tmp
// // //           }

// // //         }

// // //     }
// // //     return array
// // // }

// // // var arr_predefine = [1,55,44,2,3,44,76,111111,3,44,66]//[5, 3, 8, 1, 4,1111111,66];
// // // console.log("Original array:", a(arr_predefine));










// // // let a=2;
// // // let b=3;

// // // a=a^b
// // // b=a^b
// // // a=b^a

// // // console.log(a,b)

// // // let a = ["1","2","3",undefined,""];
// // // const c = a.filter((x)=>{
// // //     return x
// // // });

// // // console.log(c); //1,2,3




// // // console.log("1");//1

// // // const v = (getDetail("2")) //2

// // // console.log(v)//2

// // // console.log("3");//3

// // //  function getDetail(id){  //2

// // //   setTimeout(async () => {

// // //     console.log(id)

// // //     return await id;

// // //   }, 2000);

// // //   // 1,3, functin() ,v


// // // let arr = [1, 2, 1, 3, 2, 1]
// // // //{1:3, 2:2, 3:1}

// // // function occ(array) {
// // //     let tmp_obj = {};
// // //     for (const val of array) {
// // //         tmp_obj[val] = (tmp_obj[val] || 0) + 1
// // //     }
// // //     return tmp_obj
// // // }

// // // console.log(occ(arr))

// // // let pro=new Promise((resolve,reject)=>{
// // //     let flag=true;
// // //     if(flag){
// // //         resolve("result from resolve")
// // //     }else{
// // //         reject("result from reject")
// // //     }

// // // })

// // // const a=await a()
// // // let b=a.json()





// // //event loop

// // //call stack
// // //event loop
// // // web api -->dom, console, timmer ,fetch, cb
// // //cb  , micro task 

// // // console.log("a")//1

// // // for (let index = 0; index < 1000000; index++) {
// // //    console.log(index)
// // // }
// // // setTimeout(()=>{
// // //     console.log("set")
// // // },0)//4
// // // // fetch("hot").then(()=>{//3

// // // // })

// // // console.log("b")//2

// // // role:user,admin 

// // // id ,Pass

// // // router.get("/a")

// // // 2000
// // // 8000
// // // 7000
// // // 9000
// // //  select top 1 sal from emp(
// // // select top 2 salary from emp order by sal desc)

// // // order by sal asc
// // // 9
// // // 8

// // // 8
// // // 9

// // // select top 2 salary from emp order by sal desc

// // // select distinct(salary) from emp as emp1 where 2-1 (
// // // select count (distinct(salary)) from emp as emp2 where emp2.salary>emp1.salary


// // // Arr = [2, 5, 3, 4, 8, 1]
// // // //sum = 10
// // // function name1(Arr) {



// // //     for (let i = 0; i < Arr.length; i++) {
// // //         for (let j = i + 1; j < Arr.length; j++) {
// // //             //const element = array[j];
// // //             let tmp = Arr[i] + Arr[j]
// // //             if (tmp == 10) {
// // //               //  console.log("values are", Arr[i], Arr[j])
// // //               let val=`${Arr[i]}, ${Arr[j]}`
// // //                 return  val //Arr[i], Arr[j]

// // //             }


// // //         }
// // //         return -1
// // //     }

// // // }

// // // console.log(name1(Arr))











// // // function sayHi() {
// // //     console.log(name); 
// // //     console.log(age);
// // //     var name = 'Lydia';
// // //     let age = 21;
// // //   }

// // //   sayHi()

























// // // //user
// // // Id name address 


// // // //orders
// // // id user_id desc


// // // select us.name from user as us left join on order as ord where   us.id=ord.user_id

// // //  let fs=require(fs)

// // //  let read_opration=fs.createReadStreame()































// // // // "given multiple paragraphs (posts) 
// // // // 1) list all unique words, 
// // // //case sensitive 2) identify all hashtags 3) list hashtags with most occurrences
// // // // and least occurrences (popularity) with their counts (total count and count by paragraph)"

// // // //let string="#list #all #unique #words";


// // // let string1="Feeling inspired by the #sunrise this morning 🌅. A reminder that each day is a fresh start! #NewBeginnings #Gratitude #MorningMotivation #PositiveVibes #EmbraceTheDay"
// // // let string2="Late-night thoughts under the stars ✨. Reflecting on the beauty of the universe and our place within it. #StarryNight #Universe #Reflection #Gratitude #LateNightContemplation"


// // // function cnthashtag(str){

// // // let strval=str.split(" ");
// // // //console.log(strval)
// // // let tmp_arr=[];
// // // for (let index = 0; index < strval.length; index++) {

// // //   let newstr_len=strval[index]
// // //   for (let j = 0; j < newstr_len.length; j++) {
// // //     if(newstr_len[0] == "#"){
// // //       if(!tmp_arr.includes(strval[index])){
// // //         tmp_arr.push(strval[index])
// // //       }

// // //     }

// // //   }
// // // }
// // // //console.log("strval[index]---->",tmp_arr)

// // // // let obj={}
// // // // for (const iterator of tmp_arr) {
// // // //   obj[iterator]=(obj[iterator] || 0)+1

// // // // }
// // // // return obj
// // // return tmp_arr
// // // }

// // // function occ(){

// // //   let string12=cnthashtag(string1)
// // //   let string13=cnthashtag(string2)
// // //   let arr=[...string12,...string13]
// // //   let obj={}
// // // for (const iterator of arr) {
// // //   obj[iterator]=(obj[iterator] || 0)+1

// // // }
// // // return obj
// // // }

// // // console.log(occ())



// // // // console.log()   1
// // // // setTimeout//5 3
// // // // console 2 

// // // let event = reqire("EventEmmiter") 
// // // event=new EventEmitter();

// // // event.on("on click",function(mgs){
// // //   console.log(`butten clicked,${mgs}`)
// // // })

// // // event.emit(hi)

// // // function a(){

// // //   function b(p){

// // // function c(p){


// // //   }
// // //   }
// // // }

// // // function is_admin(req,res,next){
// // // next()
// // // "this user is not admin"
// // // }

// // // function login(){

// // // }

// // // "/login", is_admin,login








// // // //"Get Count of each user from array
// // // //  Input :
// // // let users = ["alex", "bob", "cary", "alex"];

// // // function cnt_name(arr) {
// // //     let tmp = [];
// // //     let obj = {};
// // //     for (const iterator of arr) {
// // //         obj[iterator] = (obj[iterator] || 0) + 1


// // //         let obj_nest = {
// // //             name: iterator,
// // //             count: obj[iterator]
// // //         }
// // //         tmp.push(obj_nest)




// // //     }

// // //     // console.log(tmp)



// // //     return tmp//obj
// // // }


// // // function createarray() {
// // //     let tmp = cnt_name(users)
// // // let arrrr=[]
// // //     for (let i = 0; i < tmp.length; i++) {

// // //         for (let j = i+1; j < tmp.length; j++) {

// // //             if (tmp[i].name === tmp[j].name) {
// // //                 let obj_nest = {
// // //                     name: tmp[i].name,
// // //                     count:  tmp[i].count + 1
// // //                 }
// // //                 arrrr.push(obj_nest)
// // //             } else {
// // //                 let obj_nest = {
// // //                     name:tmp[i].name,
// // //                     count: 1
// // //                 }
// // //                 arrrr.push(obj_nest)
// // //             }

// // //         }



// // //     }

// // //     return  tmp
// // // }

// // // console.log(createarray())


// // // function countOccurrences(arr) {
// // //     let counts = {};

// // //     // Count occurrences of each element
// // //     arr.forEach(function(user) {
// // //         counts[user] = (counts[user] || 0) + 1;
// // //     });

// // //     // Convert counts object to array of objects

// // //     let result = [];
// // //     for (let user in counts) {
// // //         console.log( { name: user, count: counts[user] })
// // //         result.push({ name: user, count: counts[user] });
// // //     }

// // //     return result;
// // // }

// // // let users = ["alex", "bob", "cary", "alex"];
// // // let occurrences = countOccurrences(users);
// // // console.log(occurrences);


// // // // Output:
// // // result =
// // // [
// // //         {
// // //                 name : "alex",
// // //                 count : 2
// // //         },
// // //         {
// // //                 name : "bob",
// // //                 count : 1
// // //         },
// // //         {
// // //                 name : "cary",
// // //                 count : 1
// // //         }
// // // ]


// // // const numbers = [45, 4, 9, 16, 25];

// // // let txt = "";
// // // for (let x in numbers) {
// // //   txt += numbers[x] 
// // // }

// // // console.log(txt)


// // // let obj={
// // //     name:"sumit",
// // //     age:30
// // // }

// // // let obj2=obj

// // // obj2.name="golu"
// // // console.log(obj2)
// // // console.log(obj)

// // //reverse a no

// // //const numbers = "sumit kesahri is my name";

// // // function rev(a) {
// // //     let str = a.split(" ")
// // //     console.log(str)
// // //     let word=[]
// // //     for (let i = 0; i < str.length; i++) {
// // //         word[i]=str[i].split("").reverse().join("")

// // //     }
// // //     // let ab=str.reverse("").join(" ")
// // //     return word.join(" ")
// // // }

// // // console.log(rev(numbers))

// // // function reverse_loop(a) {
// // //     let str = a.split(" ")
// // //     console.log(str)
// // //     let strlen = str.length;
// // //     let hallen = Math.floor(strlen / 2)
// // //     for (let i = 0; i < hallen; i++) {

// // //             let tmp = str[i]
// // //             str[i] = str[strlen - 1-i]
// // //             str[strlen - 1-i] = tmp


// // //     }
// // //     return str.join(" ")
// // // }
// // // console.log(reverse_loop(numbers))


// // // const numbers = [45, 4, 9, 16, 25];
// // // let search_val = 99;
// // // function search(array, search) {

// // //     for (let i = 0; i < array.length; i++) {


// // //             if (array[i] == search) {
// // //                 return i
// // //             }


// // //     }
// // //     return -1
// // // }
// // // console.log(search(numbers, search_val))

// // // const numbers = [45, 4, 9, 16, 25];

// // // function sort(...array) {
// // //    // for (let i = 0; i < array.length; i++) {
// // //         for (let j = 0; j < array.length; j++) {
// // //             if (array[j] > array[j + 1]) {
// // //                 let tmp = array[j]
// // //                 array[j]=array[j+1]
// // //                 array[j+1]=tmp
// // //             }

// // //         }

// // //    // }
// // //     return array
// // // }

// // // console.log(sort(1,2,3,4,5,6,7,8,9,10,12,44,2,3))


// // // let arr = [1, 2, 3, 4, 5, 6, 7, 2, 2, 3, 3];

// // // function remdublicate(arr) {
// // //     let tmp = [];
// // //     for (let i = 0; i < arr.length; i++) {
// // //         //   if (!tmp.includes(arr[i])) {
// // //         //     tmp.push(arr[i])
// // //         //   }
// // //         // console.log(obj[arr[i]])
// // //         // if (!obj[arr[i]]) {
// // //         //     obj[arr[i]] = 1
// // //         //     tmp.push(arr[i])
// // //         // }

// // //         for (let j = i + 1; j < arr.length; j++) {
// // //             if (arr[i] == arr[j] && !tmp.includes(arr[i])){
// // //                 tmp.push(arr[i])
// // //             }

// // //         }

// // //     }
// // //     return tmp
// // // }

// // // console.log(remdublicate(arr))

// // // let arr = [ 2, 3, 11,4, 5, 6, 7, 8, 9, 10];
// // // let b = arr.reduce((acc, curr) => {
// // //     if (curr < acc) {
// // //        acc = curr
// // //     }
// // //     return acc
// // //  })

// // //  console.log(b)


// // // let a=[1,2,3,4]
// // // a[100]=100;
// // // console.log(a.length)


// // // let x = 5;
// // // function abc() {
// // //     x = 10
// // //     console.log(x)

// // // }
// // // abc()

// // // console.log('start');

// // // process.nextTick(() => {
// // //     console.log('next tick');
// // // });

// // // console.log('end');



// // // // Tushar Goyal
// // // // 6:20 PM
// // // // var x = 3;
// // // // var y = "3";
// // // // console.log(x + y)
// // // // ///
// // // // var x = 3;
// // // // var y = "3";
// // // // console.log(x - y)

// // // var data = [
// // //     { name: "jack", salary: 3000 },
// // //     { name: "Raj", salary: 4000 },
// // //     { name: "Ravi", salary: 10000 },
// // //     { name: "Anu", salary: 7000 }
// // // ];

// // // function second_sal(arr) {
// // //     // console.log(arr)
// // //     for (let i = 0; i < arr.length - 1; i++) {

// // //         for (let j = 0; j < arr.length - 1; j++) {
// // //           //  console.log(arr[j].salary)
// // //             if (arr[j].salary <arr[j + 1].salary) {
// // //                 let tmp = arr[j].salary
// // //                 arr[j].salary =arr[j + 1].salary 
// // //                     arr[j + 1].salary = tmp
// // //             }
// // //         }
// // //     }

// // // if(arr.length >=2){
// // //     return arr[1].salary
// // // }
// // //     return arr
// // // }
// // // console.log(second_sal(data))





// // // let arr=[2,222,3,4,5,12,66,33,44]

// // // function sort_desc(array) {

// // //        for (let j = 0; j < array.length; j++) {
// // //        // console.log(array[j])
// // //        if(array[j]<array[j+1]){
// // //         let tmp=array[j]
// // //         array[j]=array[j+1]
// // //         array[j+1]=tmp
// // //        }

// // //        }


// // //     return array
// // // }

// // // console.log(sort_desc(arr))




// // // let up= await User .updateOne({id:12},{mobile_no:7500722492},)

// // // //admin
// // // //role:1

// // // router . post("/login",is_admin,login)


// // // is_admin(req,res,next)=>{
// // //     //1

// // //     next();

// // // }




// // // let promise=new Promise((resolve,reject)=>{
// // //     let flag=true;
// // //     if(flag){
// // //         resolve("message from resolve")
// // //     }
// // //     else{
// // //         reject("message from ")
// // //     }
// // // })


// // // console.log(a)
// // // let a:=10; 
// // // name1()

// // // function name1(params:) {
// // //     console.log("tets")
// // // }   

// // // event emmiter
// // // evnt list
// // // event handler

// // // const server=hhtps.createserver()

// // // server.on("request",function name(params) {
// // //     //logic

// // //     console.log(params)
// // // })

// // // server.emit("onclick",params)

// // //


// // //5 gb file zip

// // //extracted

// // // const fs=require("fs")

// // // let path="../"

// // // let content="";

// // // let data=fs.createReadStream(path,function name(params) {
// // //     content+=content
// // // })

// // // console.log()
// // // setTimeout
// // // fetch


// // // const str = "thisismystring"

// // // //{t: 2, h: 1,s: 3 ...}

// // // function char_count(string) {
// // //     let obj = {}
// // //     for (const iterator of string) {
// // //         obj[iterator] = (obj[iterator] || 0) + 1
// // //     }
// // //     return obj
// // // }

// // // console.log(char_count(str))


// // // let arr = [
// // //     { a: 2, b: 2, c: 3 },
// // //     { a: 4, b: 2, c: 3 },
// // //     { a: 2, b: 2, c: 3, d: 8 }
// // // ]

// // // function name(arr) {
// // //     let obj = {}
// // //     arr.forEach((ele) => {

// // //         // console.log(ele)

// // //         for (const key in ele) {

// // //             // console.log(ele[key])

// // //             if (obj[key]) {
// // //                 obj[key] = obj[key] + ele[key]
// // //             } else {
// // //                 obj[key] = ele[key]
// // //             }

// // //         }

// // //     })
// // //     return obj
// // // }


// // // console.log(name(arr))




// // // function sayHi() {
// // //     console.log(name); 
// // //     console.log(age);
// // //     var name = 'Lydia';
// // //     let age = 21;
// // //   }

// // //   sayHi()




// // // let object={
// // //     name:"sumit"
// // // }

// // // let object1=object
// // // object1.name="raj"
// // // console.log(object1,object)

// // // let object = {
// // //     name: "sumit"
// // // };

// // // // Creating a deep copy of object
// // // let object1 = JSON.parse(JSON.stringify(object));

// // // object1.name = "raj";

// // // console.log(object1, object);


// // // let a=10;

// // // a=12;
// // // console.log(a)


// // const name = {
// //     name: "sumit"
// // };
// // name.ssss="sasa"
// // console.log(name)







// // console.log("start")
// // setTimeout(() => {

// // }, 1000)
// // console.log("end")

// // let arr = [1, 2, 3, 4]
// // function a(arr, result) {

// //     function b(result) {
// //         console.log(result)



// //     }
// //     b();
// // }

// // a();

// // a(result).then(
// //     b().then()

// // ).catch(

// // )




// // function foo(num) { //10
// //     console.log("foo: " + num);  //10
// //     this.count++;
// // }

// // foo.count = 0;

// // let i;

// // for (i = 0; i < 10; i++) {
// //     if (i > 5) {
// //         foo(i);   //  10   ,6,7,8,9
// //     }
// // }

// // // console.log(foo.count);   // 1 



// // // let arr=[12,2,3,4,5]

// // // function user(params) {

// // // }



// // // let Arr = [2, 7, 9, 4, 3];
// // // let Sum = [2, 9, 18, 22, 25];
// let Arr = [2, 7, 9, 4, 3];

// function sum(array) {
//     let sum1 = 0
//     let tmp = []
//     for (let i = 0; i < array.length; i++) {
//         sum1 += array[i]

//         tmp.push(sum1)
//     }
// return tmp
// }

// console.log(sum(Arr))




// // function sum(array) {
// //     let tmp_arr = [];//2
// //     for (let i = 0; i < array.length - 1; i++) {
// // console.log(i)


// //         // if (i == 0) {
// //         //     tmp_arr.push(array[i])  //2
// //         // }
// //         // else {

// //         //     // for (let j = 0; j < array.length; j++) {
// //         //     //  if(array[i]){
// //         //     //     tmp_arr.push( array[j])
// //         //     //  }else{
// //         //     //     tmp_arr.push( array[j]+array[j+1])

// //         //     //  }
// //         //     console.log(tmp_arr[i], array[i + 1])
// //         //     tmp_arr.push(tmp_arr[i+1] + array[i + 1])

// //         //     // }

// //         // }

// //     }

// //     return tmp_arr
// // }
// // console.log(sum(Arr))






// /// You are climbing a staircase. It takes n steps to reach the top.
// // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// // n length eg 5
// // 1,2,1,1  //1,1,1,1,1  //2,2,1

// // //stair_value =5
// // // function stair(stair_value) {
// // //     let sum = 0; //1

// // // let tmp=[];//1

// // //     let random_value = Math.random()*1.0
// // //     console.log(random_value)
// // // while(sum =stair_value){  //n
// // //     sum += random_value
// // //     console.log(sum)
// // //     console.log(random_value)

// // //     tmp.push(random_value)//1
// // // }
// // // return tmp

// // // }

// // // console.log(stair(5))




// // function foo(num) { //10
// //     console.log("foo: " + num);  //10
// //   //  console.log(this.count++)
// //     this.count++;
// // }

// // foo.count = 0;

// // let i;

// // for (i = 0; i < 10; i++) {
// //     if (i > 5) {
// //         foo(i);
// //     }
// // }

// //  console.log(foo.count);   // 1



// // console.log(a)
// // setTimeout(() => {
// // conosle.log(b)
// // },0)
// // console.log(c)


// // router .get ('/login', is_admin,login){

// // }

// // is_admin(req,res,next){
// //     //
// //     next()
// // }


// let name = 'lkkjjjnnfjjfnfffjj';

// function cnt(arr) {
//     let obj = {}
//     for (const key of arr) {
// obj[key]=(obj[key] || 0 )+1
//     }

//     return obj
// }
// console.log(cnt(name))





//5 =5 * 4* 3

// function factorial(number) { //5

//     let fact = 0;
//     while (number > 0) {

//         fact = factorial(number - 1) * number;
//     }


//     return fact;
// }

// console.log(factorial(5))


// let promise=new Promise((resolve,reject)=>{
//     let flag=true;
//     if(flag){
//         resolve("message from resolve")
//     }
//     else{
//         reject("message from ")
//     }
// })



// let pro=new Promise((resolve,reject)=>{

//     let flag=true;
//     if(flag==true){
//         resolve("succ")
//     }else{
//         reject("failed")
//     }
// })

// pro.then((result)=>{
// console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })



//binary search


// let array = [2, 36, 7, 7, 9,33,33]
// function check_even_odd(array) {

//     let str=""
//     for (const iterator of array) {
//         let flag = true;
//         let check_flag
//         if (iterator % 2 == 0) {
//              check_flag = true
//         }else{
//              check_flag = false
//         }

//         if(flag == check_flag){

//             str += iterator + "_"
//             flag=false
//         }else{
//             str += iterator 
//             flag=true
//         }
//     }
//     return str
// }

// console.log(check_even_odd(array))

// function processArray(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error('Input must be an array.');
//     }

//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const current = arr[i];

//         // Check if the current element is even
//         if (current % 2 === 0) {
//             result.push(current);
//             result.push('_'); // Add '_' after even element

//             // Check if the next element exists and is odd
//             if (i < arr.length - 1 && arr[i + 1] % 2 !== 0) {
//                 result.push('_'); // Add '_' after odd element
//             }
//         } else {
//             // If current element is odd, directly add it to the result array
//             result.push(current);
//             // Check if the next element exists and is even
//             if (i < arr.length - 1 && arr[i + 1] % 2 === 0) {
//                 result.push('_'); // Add '_' after even element
//             }
//         }
//     }

//     return result.join("");
// }

// // Test the function with the provided array
// const inputArray = [2, 36, 7, 7, 9, 33];
// const processedArray = processArray(inputArray);
// console.log(processedArray); // Output: [2, '_', 36, 7, '_', 7, 9, '_', 33]


// //5--->> 5,4,3,2,1
// function recun(num) {


//     if (num == 0) {
//         return 1

//     }
//     else {
//         return num * recun(num - 1)
//     }


// }

// console.log(recun(5))


// //  You are climbing a staircase. It takes n steps to reach the top.
// // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// function climbStairs(n) {
//     if (n === 1) {
//         return 1;
//     }
    
//     let prev = 1;
//     let current = 2;
    
//     for (let i = 3; i <= n; i++) {
//         let temp = current;
//         console.log(temp,"96")
//         console.log(prev,"97")
     
//         current += prev;
//         console.log(current,"00")
//         prev = temp;
//         console.log("-------")
//     }
    
//     return current;
// }

// // Example usage:
// let n = 5;
// console.log(`Number of distinct ways to climb ${n} steps: ${climbStairs(n)}`);




// console.log("a")

// iven two tables, student and attendance
//    - student table
// 	 - id 
// 	 - userName
// 	 - age

//    - Attendance table
// 	 - id
// 	 - present (true/false)
// 	 - createdAt
//         - studentId (FK)

//         You need to fetch all the students and their attendance when they are present

//         select stu.userName,att.present, count(att.present) from student stu join Attendance att on stu.id =att.id where att.present=true



// //



// Fetch the total number of duplicate characters in a given string.

// // Input- Mississippi
// // Output -3 
// // Explain - i,s,p are duplicate characters
// let string="Mississippi"
// function dub_char(str){
//     str=str.split("")
//   //  console.log(str.length)
//     let tmp_arr=[]
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<str.length;j++){
//            // console.log("at here",str[i] == str[j] )
//             if(str[i] == str[j] && !tmp_arr.includes(str[i])){
//                  console.log("at here1")
//                 tmp_arr.push(str[i])
//             }
//         }
//     }
//     return tmp_arr.length
// }

// console.log(dub_char(string))

