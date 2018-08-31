"use strict";

const { dummySequence, factorialSequence, fibonacciSequence,
    rangeSequence, primeSequence, partialSumSequence } = require("./src/application")
const pipeSeq = require("./src/pipeSequence")
const { accumulator, isEven } = require("./src/pipes")
const test = require("./test/testApplications")

// Part 1: Sequence testing
test("Dummy Sequence", dummySequence)
test("Factorial Sequence", factorialSequence)
test("Fibonacci Sequence", fibonacciSequence)
test("Range Sequence", rangeSequence, 1,2)
test("Prime Sequence", primeSequence)
test("Partial Sum Sequence", partialSumSequence, 1,3,7,2,0)

// Part 2: Pipe testing
let pipedSequence

pipedSequence = pipeSeq(rangeSequence, 2,3)
           .pipeline(accumulator)
           .invoke()
test("Range Sequence with Accumulator Pipe", pipedSequence )

pipedSequence = pipeSeq(rangeSequence, 2,3)
           .pipeline(accumulator)
           .pipeline(isEven)
           .invoke()
test("Range Sequence with Accumulator and isEven pipe", pipedSequence )