// Function is resuable code of instruction or a block of code designed to perform a speecific task

function sayhello() {
  console.log("bye");
}

sayhello();

// Parameter:  input from outside

function greetUs(x) {
  console.log(`hey,${x}`);
}
greetUs("nitish");

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const r = add(2, 5);

for (let i = 0; i <= r; i++) {
  console.log(`value of i is ${i}`);
}

// function inside the function
// case 1
function cartoon() {
  function cartoonInsideFunction() {
    return "naturo🔥";
  }

  return cartoonInsideFunction; // here the actual definition of the function is called 
}

const anime = cartoon(); // here now anime becomes the inner function which returns the function call anime and return the string naruto🔥.
const n = anime(); 
console.log(n);
   
//case 2
// function cartoon() {
//   function cartoonInsideFunction() {
//     return "naturo🔥";
//   }

//   return cartoonInsideFunction() // here paranthese return the animen as string so it give the type error: anime is not a function
// }

// const anime = cartoon();
// const n = anime(); // here anime behaves like a function 
// console.log(n);
   
// function can return anything

// 2nd way of function

let cartoonn = function() {
    console.log('anime')
}
cartoonn();
