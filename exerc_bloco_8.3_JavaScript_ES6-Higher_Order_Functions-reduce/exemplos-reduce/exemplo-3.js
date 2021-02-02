// imprimindo maior numero do array

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85


function ordenar(arrayNumeros) {

  // for (let index = 0; index < arrayNumeros.length; index++) {
  //   let numeros = [];
  //   numeros.push(index);

  //   return numeros
  // }

  return arrayNumeros.sort((a, b) => a - b);


  
}

var arrayNumeros = [10, 9, 12];

console.log(ordenar(arrayNumeros));
