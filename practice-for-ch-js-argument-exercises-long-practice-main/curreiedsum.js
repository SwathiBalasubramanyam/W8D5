function sumThree(...args) {
    return args.reduce(function(acc, el) {
        return acc+el;
    })
    // return num1 + num2 + num3;
}


Function.prototype.curry = function(max) {
    let nums = []; 
    let func = this;

    return function _curry(num) {
        nums.push(num);
        if (nums.length >= max){
            // return func(...nums);
            return func.apply(null, nums)
        } else {
            return _curry;
        }
    }

}
  
//   sumThree(4, 20, 6); // == 30
  
  // you'll write `Function#curry`!

// function sumThree(){
//     let nums = []; 
//     let curry = function(myMax) {
//         let max = max;
//     }

//     return function _curry(num) {
//         nums.push(num);
//         if (nums.length >= max){
//             return nums.reduce(function(acc, el) {
//                 return acc+el;
//             })
//         } else {
//             return _curry
//         }
//     }
// }

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

console.log(f1);

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30



// function curryDiff(){
//     let args = Array.from(arguments)
//     let max = args[0]
//     let nums = args.slice(1)
// }

