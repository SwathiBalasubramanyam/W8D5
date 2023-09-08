function sum1(){
    let total = 0
    Array.from(arguments).forEach(function(el) {
        total += el;
    })
    return total
}

// console.log(sum1(1, 2, 3, 4) === 10);
// console.log(sum1(1, 2, 3, 4, 5) === 15);

function sum2(...nums){
    let total = 0
    nums.forEach(function(el){
        total +=el;
    })
    return total
}

// console.log(sum2(1, 2, 3, 4) === 10);
// console.log(sum2(1, 2, 3, 4, 5) === 15);


// Function.prototype.myBind = function(ctx) {
//     let that = this;
//     let bindArgs = Array.from(arguments).slice(1);
//     return function() {
//         let callArgs = Array.from(arguments);
//         that.apply(ctx, bindArgs.concat(callArgs));
//     }
// }

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//     let that = this;
//     return function(...callArgs) {
//         that.call(ctx, ...bindArgs.concat(callArgs));
//     }
// }


// markov.says.myBind(pavlov, "meow", "Kush")();

Function.prototype.myBind = function(ctx, ...bindArgs){
    return (...callArgs) => {
        console.log(this);
        this.apply(ctx, bindArgs.concat(callArgs));
    }
}



class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
}
  
class Dog {
    constructor(name) {
        this.name = name;
    }
}
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true