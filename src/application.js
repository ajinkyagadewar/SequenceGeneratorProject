"use strict";

// isPrime
const isPrime = (input) => {
    let prime = true
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}

// findNextPrime
const findNextPrime = (currentPrime) => {
  const newPrime = currentPrime + 1
  return isPrime(newPrime) ? newPrime : findNextPrime(newPrime)
}

module.exports = {

  // dummySequence
  dummySequence: () => {
    let i = 0
    return () => {
      return i++
    }
  },

  // factorialSequence
  factorialSequence: () => {
    let i = 0
    let result = 1
    return () => {
      result *= i || 1
      i++
      return result
    }
  },

  // fibonacciSequence
  fibonacciSequence: () => {
    let [prev, curr] = [0,1]
    return () => {
      [prev, curr] = [curr, prev + curr]
      return prev
    }

  },

  // rangeSequence
  rangeSequence: (args) => {
    let start = args[0]
    let step = args[1]
    let sum = 0
    return () => {
      sum = start
      start += step
      return sum
    }

  },

  // primeSequence
  primeSequence: () => {
    let nextPrime = 2
    let currentPrime
    return () => {
      currentPrime = nextPrime
      nextPrime = findNextPrime(currentPrime)
      return currentPrime
		}
  },

  // partialSumSequence
  partialSumSequence: (args) => {
    let i = 0
    let sum = 0
    return () => {
      if (i >= args.length) {
        return "error"
      } else {
        sum += args[i]
        i++
        return sum
      }
    }
  }

}
