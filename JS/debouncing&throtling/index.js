// debounce : -Debouncing is a technique used in JavaScript to control the rate at which a function is executed.
let counter = 0;

const getData = () => {
    console.log("fetching data ...", counter++)
}

const debounce = function (fn,d) {
    let timer
    return function() {
        let context = this, args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context,args);
        },d)
    }
}

const betterupdatedebounce = debounce(getData,300)

/// ================================

// throttling 

const expensive = () => {
    console.log('expensive')
}

const throttle = function(func, limit) {
    let flag = true

    return function () {
        let context = this, args = arguments

        if(flag) {
            func.apply(context, args)
            flag = false
        

        setTimeout(() => {
            flag = true
        }, limit)
        }
    }
}

const betterupdatethrotthle = throttle(expensive,300)