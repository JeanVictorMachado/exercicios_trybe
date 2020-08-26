// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (onSuccess, onError) => {
    const currentTemperature = getMarsTemperature();
    const messageSuccessfullySent = Math.random() <= 0.6;
    setTimeout(() => {
        if(messageSuccessfullySent) onSuccess(currentTemperature)
        else onError('Robot is busy');
    }, messageDelay());
  }

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);