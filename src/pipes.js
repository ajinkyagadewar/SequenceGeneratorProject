"use strict";

module.exports = {

  // ACCUMULATOR
  accumulator: () => {
    let sum = 0
    return (value) => {
      sum += value
      return sum
    }
  },

  // isEven
  isEven: () => {
    return (number) => {
      return JSON.stringify({
        status: number % 2 === 0,
        number: number
      })
    }
  }
}
