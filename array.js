// array
// const fruits = ['apple', 'cheeku', 'addu', 'santra']

// array working
// fruits.push('kiwi') // push add new element in the last of the array
// console.log(fruits)

// console.log(fruits.length); //5 because we have push the kiwi or update the array

// console.log(fruits.includes('addu')) // checks whether addu is present in the array or not.

// const firstElement = fruits.shift() //removes the first elements

// console.log (fruits);
// console.log(firstElement)

// ques and stack implementation using array

// high order function

// length property in JS
// const arr =["1","2","apple","moon", "nitish"]
// arr.length = 2;
// console.log (arr)

// important methods in the JS
// 1) Mutating methods

/* push()-> add the item in the last of ann array */
// const array1 = ["1", "2", "3", "nitish", "harshita", "raj"];
// array1.push(4);
// console.log(array1);

/* pop()-> remove the item in the last of ann array */
// array1.pop();
// console.log(array1);

// /* unshift()-> add the item in the starting of an array */
// array1.unshift("boss");
// console.log(array1);

// /* shift()-> remove the item in the starting of an array */
// array1.shift();
// console.log(array1);

/* splice()-> add/remove the item in the anywhere of an array 
              its mutable type of thing means it mutate the original array
              splice() is an array method used to add, remove, or replace elements in an array.

              ✅ Modifies the original array
              ✅ Returns the removed elements

*/

// 1. remove elements

//  array1.splice(1,2)
//  console.log(array1)

// // 2. add elements

// array1.splice(0,1,"hello")
// console.log(array1)

// //3. replace elements
//  array1.splice(1,1,"hola")
//  console.log(array1)


//  // slice -> return a copy of section of an array
//  const element = array1.slice(1,4)
//  console.log(element)

 // higher order function in JS

//  function merapyara (udharkafunction){
//     return udharkafunction()+40
   
//  }

//  function cartoon(){
//     return 10
//  }

//  function ekaurfunction(){
//     return 100
//  }

// console.log(merapyara(ekaurfunction))

/* merapyara(cartoon)
    │
    ▼
Inside merapyara, the variable 'udharkafunction' becomes 'cartoon'.
    │
    ▼
Line runs: return udharkafunction() + 40
    │
    ▼
Since udharkafunction is 'cartoon', it executes: cartoon() + 40
    │
    ▼
cartoon() runs and returns 10  -->  10 + 40
    │
    ▼
Final Output: 50 */

const array1 = ["1", "2", "3", "nitish", "harshita", "raj"];

// to generally print the array elements

// for (let i =0; i<array1.length; i++){
//     console.log(array1[i])
// }
// print the array elements using function
// function printkardo (element) {
//     console.log(element)
// }

array1.forEach (element => console.log(`${element}`)) // basically just calling your function for every element

//map

const nums =["1","10","20","40","50"]
const result=nums.map((a) => a*2) // map return a new array. internally it creates the new empty array while forEach changes 
    console.log(result)