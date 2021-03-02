
// let vs const

// both have local scope


// const
// 1 must be defined in the declaration
// 2 cant be changed

const x = 10;
// x = 12; // TypeError: Assignment to constant variable.

let y;
y = 10;
y = 'test'
console.log('y',y);





// same same
a = 10;
var a;
var b = 20;
c = 30;





console.log('a',a);
console.log('b',b);
console.log('c',c);


// var is function scope


var d = 10;
function test(){
   var d  = 5;
}


console.log('d',d);











