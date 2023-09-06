//A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality 
// on older browsers that do not natively support it.

// map polyfill

const myArr = [1,2,3,4,5]

function myPolyfillMap(arr,cb) {
    let newArr = []

    for(let i = 0;i<arr.length;i++) {
        newArr.push(cb(arr[i]))
    }

    return newArr
}


function square(x) {
    return x * x
}

// console.log(myPolyfillMap(myArr,square))

// filter polyfill

function myPolyfillFilter(arr,cb) {
    let newArr = []

    for(let i = 0;i<arr.length;i++) {
        if(cb(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

function isEven(x) {
    if(x%2 == 0) {
        return x
    }
}

console.log(myPolyfillFilter(myArr,isEven))

// reduce

function reducePolyfill(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }
  const numbers = [1, 2, 3, 4, 5];

const sum = reducePolyfill(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
