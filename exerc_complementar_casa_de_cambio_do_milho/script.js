const apiInfo = {
    api: 'https://api.ratesapi.io/api/',
    endPoint:'latest'
}

const url = `${apiInfo.api}${apiInfo.endPoint}?`

//dentro do onload ficara a chamada das funcoes
window.onload = () => {
    setupEventHandlers();
}

//aqui abaixo do onload ficara a inplementacao das funcoes

//funcao que recebe o botao e o aciona a implementacao no html recebendo como parametro outra funcao
const setupEventHandlers = () => {
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', handleSearchEvent);

    const inputText = document.querySelector('#currency-input');
    inputText.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            handleSearchEvent();
        }
    });
}

//funcao que emplementa algo no html
const handleSearchEvent = () => {
    clearList();
    const currencyValue = document.querySelector('#currency-input').value;
    //o parametro da funcao fetchCurrency (currency) é o valor digitado no input
    fetchCurrency(currencyValue);
}

const clearList = () => {
    const currencyList = document.querySelector('#currency-list');
    currencyList.innerHTML = '';
}

//funcao que recebe como parametro o valor de simbolo da moeda digitado no input e implementa na url da api solicitada 
const fetchCurrency = (currency) => {
    const endpoint = `${url}base=${currency}`
    
    fetch(endpoint)
        //response é a responta da api solicitada pelo fetch
        .then((response) => response.json())
        .then((object) => {
            //console.log(object);
            if (object.error) {
                //console.log(object.error)
                throw new Error(object.error);
            } else {
                handleRates(object.rates);
            }
        })
        .catch((error) => handleError(error))
}

// essa funcao da um alerta com o erro tratado pelo .catch a cima e passado como parametro a essa funcao
const handleError = (errorMessage) => {
    window.alert(errorMessage);
}

//funcao que passa como parametro a funcao renderRate a chave e o valor separados 
const handleRates = (rates) => {
    const ratesKeys = Object.keys(rates);
    //console.log(ratesKeys)
    ratesKeys.forEach((key) => {
        const value = rates[key];
        //console.log(value);
        renderRate(key, value);
    })
}

//funcao que adiciona os elementos li na ul ja com os valores concatenados em forma de string 
const renderRate = (key, value) => {
    const currencyList = document.querySelector('#currency-list');
    const formattedValue = value.toFixed(2);

    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${formattedValue}`;

    currencyList.appendChild(li);
}