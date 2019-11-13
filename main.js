const reader = require('readline-sync');
const util = require('./myUtils');

const number1 = reader.questionInt("Please insert your first number = ");
const number2 = reader.questionInt("Please insert your second number = ");

function primes(a, b) {
  if(a > 0 && b > 0){
    let primes = [];

    for(let i = a; i <= b; i++){
      if(util.isPrime(i)){
        primes.push(i)
      }
    }
    if(primes.length){
      return primes;
    }else{
      return "There are no prime numbers.";
    }
  }else{
    return "Both numbers should be positive.";
  }
}

let result = primes(number1,number2);
util.printElements(result);