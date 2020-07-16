//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let numero = 5;
let asteriscos = "* "
let quadrado = " ";



for (let i = 0; i < numero; i += 1) {
    quadrado = quadrado + asteriscos;
}
//console.log(quadrado)

for (let i = 0; i < 5; i += 1) {
    console.log(quadrado);
}
