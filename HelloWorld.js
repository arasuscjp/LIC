//console.log("Hello world!");
//console.log("Hello");

/*var userName="Sachin";
var email="sachin.cric@espn.in";
var password="123456";
var isLogedin=false;
console.log(`
User Name: ${userName}
E-mail: ${email}
Logged-in: ${isLogedin}
`)*/

/*var x=9>2;
console.log(typeof x)*/

/*var email=true;
var userLoggedIn = true;
var userName=false;
if(email && userLoggedIn && userName){
    console.log("Validation Success..!")
}*/

//with out break
//return - no need br

/*var user="admin";
switch(user){
    case "admin":
        console.log("Read/Write access");
    break;
    case "endUser":
        console.log("Read Access Only..!");
    break;
    default:
        console.log("Trial version");
    break;
    
}*/

/*
//var userName=null;
//var userName="null";
var userName="";
if(userName){
    console.log("Condition true");
}*/

/*
// == and === diff
var count="2";

if(count===2){
    console.log("equal")
}
*/


// functions
/*function logDetails(){
    console.log("Logs are monitoring..!")
}
logDetails();
*/

/* 
function logDetails(serverName){
    console.log(serverName,"Logs are monitoring..!")
    console.log(`${serverName} Logs are monitoring..!`)
}

logDetails("Google-USA"); */


//function with return type
/* function getUserDetails(){
    return "Name: Smith";
}

var userDetails = getUserDetails(); //fun pgm
console.log(getUserDetails())
console.log(userDetails); */

/* function userRoleValidation(userName, role){
    switch(role){
        case "admin":
            return `${userName} - Read/Write access`;
        //break; //avoid break
        case "endUser":
            return `${userName} - Read Access Only..!`;
        //break;
        default: 
            return `${userName} - Trial version`;
        //break;
        
    }
}

console.log(userRoleValidation("virat","admin")); */


/* 
context in JS - broswer  - console - example
var userName="Dravid";
undefined

userName
'Dravid'

if(userName===userName){console.log("SUCCESS..!");}
VM819:1 SUCCESS..!
undefined


if(userName===window.userName){console.log("SUCCESS..!");}
VM954:1 SUCCESS..!
*/


/* 
//Parsing

console.log(roughScale('0xF', 16)); //Rule1
  // expected output: 1500

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed * 100;
  }
  
  //0xF - hexa decimal - 15
  console.log(roughScale("0xF", 16));
  // expected output: 1500

  console.log(roughScale('0xF', 16));
  // expected output: 1500
  
  console.log(roughScale('321', 2));
  // expected output: 0
 */


/*
  //rule 2
  console.log("Line146: ",userName);
var userName="Lara";
console.log("Line48: ",userName);


*/

/* 
//Scope Change

var accType="Demat account"; //global

console.log("Account Type: 155 :: ", accType) //2nd layer
function getAccountType(){
    console.log("Account Type: 157 :: ", accType)  //1st layer
}
getAccountType();
 */

/*
//same example with local variable init
var accountType="Demat account"; //global

console.log("Account Type: 164 :: ", accountType) //2nd layer
function getAccountType(){
    var accountType="Savings account"; //local variable
    console.log("Account Type: 167 :: ", accountType)  //1st layer
}
getAccountType();

*/

/*
var accountType="Demat account"; //global

console.log("Account Type: 177 :: ", accountType) //3 layer
function getAccountType(){
    var accountType="Savings account"; //local variable
    console.log("Account Type: 180 :: ", accountType)  //2 layer

    getAccountType1();    
    function getAccountType1(){
        console.log("Account Type: 184 :: ", accountType)  //1 layer
    }
}
getAccountType();
*/

/* 
//this intro
console.log(this); //run same thing in browser console

function logDetails(){
    var userName="Lee";
    console.log(`UserName: ${userName}`);
    console.log(this) //after doing some operation
}
logDetails(); */

/*
// Array
var cars = ["Saab", "Volvo", "BMW"]
console.log(typeof cars)
console.log(cars)
console.log(cars[0])
console.log(cars.length)
cars[0]="Tata"
console.log(cars);
*/

/*var cars = ["Saab", "Volvo", "BMW"]
console.log(cars)
cars.pop();
console.log(cars)
cars.unshift("Tata");
console.log(cars)
cars.shift();
console.log(cars)
*/

/* 
var cars = ["Saab", "Volvo", "BMW"]
//for(let i=0;i<=cars.length;i++) //<= last value is undefined
for(let i=0;i<cars.length;i++)
{
   // console.log(i);
    console.log("Car Name:"+cars[i]);
} */

/* 
// Callback and arrow function in array
function isEven(value){
    //if(value%2===0){
    //    return true;
   // }
   // return false;
    return value%2===0;
}

console.log(isEven(2))
 */


/* 
function isEven(value){
    return value%2===0;
}
//var value = [2,4,6,8].every(isEven)
var value = [2,3,6,8].every(isEven)
console.log(value)
 */

/* 
var isEven = (value) => {
    return value%2===0; //check comment this line
}
console.log(isEven(2))
 */

/*
var isEven = (value) => {
    return value%2===0; //check comment this line
}
var values = [2,4,6,8].every(isEven);
console.log(values);
*/

/*
var values = [2,3,6,8].every((isEven)=>{
    return isEven%2===0;
});
console.log(values);
*/

/*
var values = [2,3,6,8].every((isEven)=>isEven%2===0);
console.log(values);
*/


/* // Array Fill
var values = [2,3,6,8]
values.fill(9)
console.log(values)

var values = [2,3,6,8]
values.fill(9,2) //start position
console.log(values)

var values = [2,3,6,8]
values.fill(9,2,3) //value, start and end position
console.log(values)

var values = [2,3,6,8]
var updatedValue = values.filter((e)=>e!=2) //added filter
console.log(updatedValue) */


//@@@@@@@@@@@@@@@@@@ 12-09-2021
//Slice and Splice
/* var days=["sun","mon","tue","wed","thu","fri","sat"]
console.log(days.slice(2))
console.log(days.slice(2,3)) */ 

/* var days=["sun","mon","tue","thu","fri","sat"]
console.log("Before - ", days)
console.log("After - ", days.splice(1,2,"Nill"))// no modification. after method call will get the results
console.log("After - ",days)

var days1=["sun","mon","tue","thu","fri","sat"]
days1.splice(1,3,"non")
console.log(days1)

var days1=["sun","mon","tue","thu","fri","sat"]
days1.splice(1,3,"non", "nill")
console.log(days1)

var days1=["sun","mon","tue","thu","fri","sat"]
days1.splice(1,3,"non", "nill","null")
console.log(days1) */


/* var movieTicket = {
    movieName: "AVATAR 2",
    Director: "James Cameron",
    budget: "500", //million $
    language: "English",
    boxOffice: "3.8", //Billion $
    released: "false"
};

console.log(typeof movieTicket)
console.log(movieTicket)
console.log(movieTicket.movieName)
console.log(movieTicket["movieName"])

movieTicket.budget=400
console.log(movieTicket.budget)
console.table(movieTicket)
 */


//Object inside define methods

/* var movieTicket = {
    movieName: "AVATAR II",
    Director: "James Cameron",
    budget: "500", //million $
    boxOffice: "3.8", //Billion $
    released: "false",
    language: [],
    buyMovie: function (langName){
        this.language.push(langName)
    },
    getMovieTicketCount: function(){
        return `${this.movieName} movie added language count: ${this.language.length}`
    }
};
movieTicket.buyMovie("English")
movieTicket.buyMovie("Tamil")
movieTicket.buyMovie("Japanese")
console.log(movieTicket.getMovieTicketCount())

 */



// DOM
//google Image search "html dom"



// Functional way of defining Object
/* 
var Movie = function (movieName, ticketCount) {
    this.movieName = movieName;
    this.ticketCount = ticketCount;
    this.getTicketCount = function () {// getter method
        console.log(`Movie Ticket count is: ${this.ticketCount}`)
    }
}

var avatar = Movie("avatar",2) // undefined .. we need to create with new keyword
console.log(avatar)
var avatar = new Movie("avatar",2)// thrw constructor we initialize the values
console.log(avatar)
avatar.getTicketCount()
var f9 = new Movie("F9",1)
//console.log(f9)
 */


/* 
//prototype and getter()
var Movie = function (movieName, ticketCount) {
    this.movieName = movieName;
    this.ticketCount = ticketCount;
    this.getTicketCount = function () {// getter method
        console.log(`Movie Ticket count is: ${this.ticketCount}`)
    }
}
Movie.prototype.getMovieName = function(){
    console.log(`Your movie ticket Name: ${this.movieName} `)
}

var avatar = new Movie("avatar",2)// thrw constructor we initialize the values
avatar.getMovieName()

var f9 = new Movie("F9",1)
f9.getMovieName()
 */


//Math package
/* var maxValue = Math.max(3,4,5,6,7,8,9)
console.log(maxValue) */


//Assign values from one obj to another Obj
 /* var myobj={}
Object.assign(myobj,{a:1,b:2,c:3,d:4}, {x:1, y:2, z:3, s:4})
console.log(myobj)  */


//Spread Operator
/* function sum(a,b){
    return a+b
}
console.log(sum(2,3))
var values = [6,3];
//console.log(sum(values))
console.log(sum(...values))
 */

/* function sumOfNumbers(...args){// REST operator
    let sum=0;
    for(const arg of args){ 
        sum+=arg;

    }
    return sum;
}
console.log(sumOfNumbers(1,1,1,1,1,1,1,1))

function calc(a,b,...args){
    let x=a*b;
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return [x,sum]

}
console.log(calc(2,3,1,1,1)) */


// Object creation
//<JS-Learning -> User.js and admin.js>


const MovieTicket = require("./MovieTicket.js");
const user1 = new MovieTicket("Hulk-II",2)
console.log(user1.getMovieInfo());
user1.ticketBooking("MIB-V") //like setter
user1.ticketBooking("Life of pi")
console.log(user1.getTicketList())