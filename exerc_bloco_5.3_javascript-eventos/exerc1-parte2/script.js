const button = document.querySelector('.button');
function alertar() {
alert("Você clicou no botão!!!");
}
button.addEventListener("click", alertar);


const button2 = document.querySelector('.button2');
const gamePrice = 39.99;
const discount = 0.20;
function alertDiscount() {
    let discoutResult = gamePrice * discount;
    alert("the discount is from " + discoutResult + "!!!" )
}
button2.addEventListener("click", alertDiscount);

