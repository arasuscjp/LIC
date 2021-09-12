const User = require("./User.js");
const user1 = new User("Smith","admin") 
//console.log(user1.getUserInfo())
console.log(user1.userList)  //trying to access the private member
console.log(user1.getUserList())//getting private member var
