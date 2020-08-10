// const fatorial = number => {
//     let result = 1;

//     for (let i = 2; i <= number; i += 1) {
//         result = result * i;
//     }
//     return result;
// }

// console.log(fatorial(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorial(5));