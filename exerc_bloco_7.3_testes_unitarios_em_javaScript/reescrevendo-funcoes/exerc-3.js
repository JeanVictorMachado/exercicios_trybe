
const assert = require('assert');

const greaterThanTenNew = (array) => {
    const results = [];
    for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
        results.push(array[i]);
    }
}
    return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTenNew, 'function');
const output = greaterThanTenNew(parameter);
assert.deepEqual(output, result);