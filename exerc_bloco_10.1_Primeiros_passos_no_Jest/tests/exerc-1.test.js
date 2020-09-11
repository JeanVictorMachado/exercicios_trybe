const sum = require('../exercises/exerc-1');

// describe('sum', () => {
//   it('soma dois numeros', () => {
//     expect(sum(1, 2)).toBe(3);
//     expect(sum(4, 5)).toBe(9);
//     expect(sum(0, 0)).toBe(0);
//     expect(sum(4, '5'));
//   }).toThrow('parameters must be numbers');
// });

// sum.test.js

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});

// // implemente seus testes aqui
// assert.equal(sum(4, 5), 9);
// assert.equal(sum(0, 0), 0);
// assert.equal(sum(4, '5'), 9);