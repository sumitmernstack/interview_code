
function varIncerement() {
   
    for (var i = 0; i <=5 ; i++) {
        setTimeout(()=>{
            console.log(i)
        },i * 3000)
        
    }
}
varIncerement()
// in case of var
//whole loop will run then like 0,1,2,3,4,5,6
//after that varible i will point to 6, so setTimeout Function will pick 6 
// after every 3000 milisec 6 would be printed.
//because var point same memort location each time.







function letIncrement() {
    for (let i = 0; i <=5; i++) {
        setTimeout(()=>{
            console.log(i)
        },i*3000)
    }
}
letIncrement()
//this will print 0,1,2,3,4,5
// because in let "i" create a new copy of it  self every time.