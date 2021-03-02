let x = 10;

let user = {};
user.age = x;

let user2 = user;

user2.age = 30;

console.log(x);


console.log('user.age', user.age);