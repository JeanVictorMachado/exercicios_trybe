const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (array) => {
    let output = 0;
    for (const item in array) {
      output += array[item];
    }
    return output;
  };


const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);