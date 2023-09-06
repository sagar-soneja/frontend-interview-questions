// closures :- function along with its lexical scope bundled together form closure.

// function outer() {
//     let outerVar = 10;
    
//     function inner() {
//       console.log(outerVar); // Accesses outerVar from the outer scope
//     }
    
//     return inner;
//   }
  
//   const closureFn = outer(); // The inner function is returned as a closure
//   closureFn(); // Outputs 10, even though outer() has finished executing
  
// ========================================================================================

// pure function :- function which always produces output for given input

// function add(a, b) {
//     return a + b;
//   }
  
// ========================================================================================

// curring :- it is the process of converting function which takes multiple parameter into 
// the sequenve of function  each taking a single parameter and returning another function that takes next 
// parameter untill all the parameter is consumed;

// A non-curried function that takes three arguments
// function add(a, b, c) {
//     return a + b + c;
//   }
  
//   console.log(add(2, 3, 4)); // Outputs 9
  
//   // Now, let's create a curried version of the same function
//   function curriedAdd(a) {
//     return function (b) {
//       return function (c) {
//         return a + b + c;
//       };
//     };
//   }
  
//   const add2 = curriedAdd(2); // Partial application with the first argument
//   const add2And3 = add2(3); // Partial application with the second argument
  
//   console.log(add2And3(4)); // Outputs 9
  
// infinite curring :-

// function add(a) {
//     return function(b) {
//         if(b) return add(a+b);
//         return a;
//     };
// }

// console.log(add(5)(3)(2)(6)())

//partial function transform one function into another function with small arity
// arity means no of function or arguments function receive

// function sum(a) {
//     return function(b,c) {
//         return a+b+c
//     }
// }

// const x = sum(10)
// console.log(x(5,6))
// console.log(x(3,2))

// curring custom , making function that takes normal function and change it into curry
// function curry(func) {
//     return function curriedFunc(...args) {
//         if(args.length >= func.length) {
//             return func(...args);
//         } else {
//             return function (...next) {
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }


// const sum = (a,b,c,d) => a + b + c +d

// const totalsum = curry(sum);

// console.log(totalsum(1)(6)(5)(6))
// ========================================================================================

// Hoisting :- It is behavior in JS where variable and function declaration are moved to the
// top of their containing scope during compilation phase. This means that you can use a variable
// or call a function before it actually declared in your code.

// variable hoisting :-
// console.log(x); // Outputs 'undefined' because the declaration is hoisted, but not the initialization
// var x = 5;

// function hoisting :-
// sayHello(); // Outputs 'Hello, World!' even though the function is declared later
// function sayHello() {
//   console.log('Hello, World!');
// }


// function expression :-
// sayHi(); // Throws an error because the variable 'sayHi' is hoisted but it's undefined at this point
// var sayHi = function() {
//   console.log('Hi!');
// }

// Let and Const :-
// console.log(x); // Throws a ReferenceError
// let x = 5;


// ========================================================================================

// Reconcillation :- It is  the process of compairing previous and current state of the virtual
// Dom to determine what changes need to be made to the actual DOM to reflect those state changes 
// accuratly.




// ========================================================================================

// Progressive web apps :- PWA are built using web platform technologies but that provides a user experience 
// that of a platform specific app. PWA can run on multiple platform and device from a single codebase

// -=============================
// null is actually a value
// undefined is a variable is defined but not intialized yet

// ========================================================================================


// call:

// call is a method available on all JavaScript functions.
// It invokes a function immediately, allowing you to specify both the value of this and 
// the arguments the function should receive.
// Arguments are passed to the function individually, separated by commas.
// It does not create a new function but executes the function on the spot.


// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.title}.`);
//   }
  
//   const person = { title: 'Mr.' };
//   greet.call(person, 'John');

  
// apply:

// apply is similar to call in that it invokes a function immediately and lets you specify the value of this.
// However, it takes an array or an array-like object as its second argument, where the array elements are 
// passed as individual arguments to the function.

// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.title}.`);
//   }
  
//   const person = { title: 'Mr.' };
//   greet.apply(person, ['John']);
  

// bind:

// bind is used to create a new function with a specific this value, without executing the function immediately.
// It returns a new function that you can call later, and any arguments passed to the bound function will
// be prepended to the arguments passed when the bound function is invoked.
// It is often used when you want to preserve a particular context for a function.  


// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.title}.`);
//   }
  
//   const person = { title: 'Mr.' };
//   const boundGreet = greet.bind(person);
//   boundGreet('John');
  

// pipe :-

// pipe :- In JavaScript, a "pipe" typically refers to a functional programming concept where 
// you apply a series of functions to an initial value, passing the result of one function as the 
// input to the next function in the chain. This concept is commonly used in functional programming 
// libraries and frameworks to create more readable and composable code.

// const pipe = (...functions) => (initialValue) =>
//   functions.reduce((value, func) => func(value), initialValue);

// // Example functions to be piped
// const add = (a) => (b) => a + b;
// const multiply = (a) => (b) => a * b;
// const subtract = (a) => (b) => a - b;

// // Create a pipe with the functions
// const calculate = pipe(add(5), multiply(2), subtract(3));

// // Use the pipe with an initial value
// const result = calculate(10); // ((10 + 5) * 2) - 3 = 19
// console.log(result); // Outputs 19

// compose :-

// In JavaScript, the compose function is a common functional programming concept used to combine 
// multiple functions into a single function. It allows you to create a new function that applies 
// a series of functions in a right-to-left (or inner-to-outer) order. The result of one function 
// becomes the input for the next function in the composition.

const compose = (...functions) => (input) =>
  functions.reduceRight((result, func) => func(result), input);

// Example functions to be composed
const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;
const subtract = (a) => (b) => a - b;

// Create a composed function
const calculate = compose(subtract(3), multiply(2), add(5));

// Use the composed function
const result = calculate(10); // (((10 + 5) * 2) - 3) = 19
console.log(result); // Outputs 19
// console.log(Math.abs(result))


// ============================================4

// Redux :-
// Redux is an open-source JavaScript library commonly used in web development, 
// particularly with frameworks like React, to manage the state of an application. 
// It provides a predictable state container for managing the data and the flow of data 
// within a JavaScript application.


// Store: Redux centralizes the application's state in a JavaScript object called a "store." The store holds all the data that represents the application's state.

// Actions: Actions are plain JavaScript objects that describe what should happen in the application. They typically have a type property that specifies the action type and can include additional data.

// Reducers: Reducers are pure functions that specify how the application's state should change in response to actions. They take the current state and an action as input and return a new state. Redux combines all reducers to produce a new state tree when actions are dispatched.

// Dispatch: To update the state, you dispatch actions to the Redux store using the store.dispatch(action) method. The store then sends the action to the reducers, which determine how the state should be updated.

// =========================

// Temporal dead zone :- it is a state in which variables are being declared in scope but not initialized

//flat array :-

let arr = [
    [1,2],
    [3,4],
    [5,6,[7,8]],
    [9,10,11]
]

function customFlat(arr, depth = 1) {
    let result = [];

    arr.forEach((ar) => {
        if(Array.isArray(ar) && depth > 0) {
            result.push(...customFlat(ar,depth-1))
        } else result.push(ar);
    })
    return result;

    
}
console.log(customFlat(arr,2))