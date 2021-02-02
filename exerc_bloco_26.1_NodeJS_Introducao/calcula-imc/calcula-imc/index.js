const { question, questionFloat } = require('readline-sync');

const imc = () => {

  const userName = question('Name: ');

  const weight = questionFloat('Peso (Kg): ').toFixed(2);
  const height = questionFloat('Altura (m): ').toFixed(2);

  const imcResult = (weight / (height * 2)).toFixed(2);

  console.log(`${userName} seu IMC é: ${imcResult}`);
  
  if (imcResult < 18.5) {
    console.log('Você está abaixo do peso!')
  }
  else if (imcResult >= 18.5 && imcResult <= 24.9) {
    console.log('Peso Normal!')
  }
  else if (imcResult >= 25 && imcResult <= 29.9) {
    console.log('Você está acima do peso!')
  }
  else if (imcResult >= 30 && imcResult <= 34.9) {
    console.log('Você está com obesidade grau I!')
  }
  else if (imcResult >= 35 && imcResult <= 39.9) {
    console.log('Você está obesidade grau II!')
  }
  else {
    console.log('Você está obesidade grau III e IV!')
  }
}

imc();