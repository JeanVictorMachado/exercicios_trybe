//window.onload = 

function squareNumber(numberSquare) {
    let squareNumber = numberSquare * numberSquare;
    console.log("O resultado do quadrado do número " + numberSquare + " sera " + squareNumber);
    return squareNumber;
}
squareNumber(5);

function halfNumber(number) {
    let halfNumber = number / 2;
    console.log("Metade de " + number + " sera " + halfNumber);
    return halfNumber;
}
halfNumber(5);

function percentOf(number1, number2) {
    let percentOf = (number1 / number2) * 100;
    console.log(number1 + " sera " + percentOf + "% de " + number2);
    return percentOf;
}
percentOf(5, 10);

function areaOfCircle(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}
areaOfCircle(2);

function doCrazyStuff(num) {
    var half = halfNumber(num);
    var squared = squareNumber(half);
    var area = areaOfCircle(squared);
    var result = percentOf(squared, area);
}
doCrazyStuff(5);


