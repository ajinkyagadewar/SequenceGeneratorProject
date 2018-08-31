"use strict";

// SEQUENCER
module.exports = (sequencer, args) => {
  return {
    next: sequencer(args)
  }
}

