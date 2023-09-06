const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function customPromise(executor) {
    let state = PENDING
    let value = null
    let handlers = []
    let catchers = []

    function resolve(result) {
        if(state !== PENDING) return;

        state = FULFILLED
        value = result

        handlers.forEach((h) => h(value))
    }

    function reject(err) {
        if(state !== PENDING) return;

        state = REJECTED
        value = err
        catchers.forEach((c) => c(value))
    }

    this.then = function(successCallback) {
        if(state === FULFILLED) {
            successCallback(value)
        } else {
            handlers.push(successCallback)
        }
    }

    this.catch = function(failureCallback) {
        if(state === REJECTED) {
            failureCallback(value)
        } else {
            catchers.push(failureCallback)
        }
    }
    executor(resolve,reject)
}


const doWork = (res, rej) => {
    if(2 == 2) {
        setTimeout(() => {
            res('Promise resolved')
        })
    } else {
        setTimeout(() => {
            rej('Promise Rejected')
        })
    }
}


let greetMsg = new customPromise(doWork)

greetMsg.then((val) => {
    console.log('then log' , val)
})

greetMsg.catch((val) => {
    console.log('catch log' , val)
})



// promise all

// if (!Promise.allSettled) {
//     Promise.allSettled = function (promises) {
//       return new Promise(function (resolve) {
//         if (!Array.isArray(promises)) {
//           throw new TypeError('Promises must be an array');
//         }
  
//         const results = [];
//         let completed = 0;
  
//         promises.forEach(function (promise, index) {
//           Promise.resolve(promise)
//             .then(function (value) {
//               results[index] = { status: 'fulfilled', value };
//             })
//             .catch(function (reason) {
//               results[index] = { status: 'rejected', reason };
//             })
//             .finally(function () {
//               completed++;
//               if (completed === promises.length) {
//                 resolve(results);
//               }
//             });
//         });
  
//         if (promises.length === 0) {
//           resolve(results);
//         }
//       });
//     };
//   }
  
//   // Example usage:
//   const promise1 = Promise.resolve(1);
//   const promise2 = Promise.resolve(2);
//   const promise3 = Promise.reject('Error');
  
//   Promise.allSettled([promise1, promise2, promise3]).then(function (results) {
//     console.log(results);
//   });
  