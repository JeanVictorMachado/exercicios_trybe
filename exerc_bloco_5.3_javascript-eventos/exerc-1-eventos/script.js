//window.onload = 

var person = "";
var adjective = "";
var noun = "";

function libIt() {
    var storyDiv = document.querySelector("#story");
    person = document.querySelector("#person").value;
    adjective = document.querySelector("#adjective").value;
    noun = document.querySelector("#noun").value;
    storyDiv.innerHTML = person + " married a " + adjective + " " + noun + "... So weird!";
}

    var libButton = document.querySelector('#lib-button');
    libButton.addEventListener('click', libIt);

function reset() {
    person = document.querySelector("#person");
    person.innerHTML = "";
    adjective = document.querySelector("#adjective");
    adjective.innerHTML = "";
    noun = document.querySelector("#noun");
    noun.innerHTML = "";
    var reset = reset.innerHTML = person + adjective + noun;
    }

    var resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', reset);