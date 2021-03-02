// scopes:
// global scope
// local scope - let and const have local scope in block of code

// function scope( var only!!!)

//{} -  block of code
// let x = {} - create object
// if(){} - block of code

let x = 0; // global

{
	let x = 5; // local
}





let a = 10;

{
   a++;

   {
      let a = 5;
      console.log(a);
      a++;
   }
   console.log(a);
   a++;
}

console.log(a);

// 5 11 12
