// const array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort();
// console.log(array);

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]