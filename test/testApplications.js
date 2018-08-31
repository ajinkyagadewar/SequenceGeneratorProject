"use strict";

const generator = require("../src/generator")

module.exports = (name, sequencer, ...args) => {
  let sequence = generator(sequencer, args)
  let results = []
  console.log(name + " Testing")
  for(let i = 0; i < 10; i++) {
    results.push(sequence.next())
  }
  console.log(results.join(", "))
}

