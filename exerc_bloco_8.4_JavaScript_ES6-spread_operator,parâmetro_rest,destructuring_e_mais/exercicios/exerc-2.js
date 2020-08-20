const assert = require('assert')

const sum = (...param) => param.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

console.log(sum());

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)

