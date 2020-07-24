
let personName = "";
const btn = document.getElementsByTagName('button');

btn[0].addEventListener('click', goDark);
btn[1].addEventListener('click', complainMessage);
btn[2].addEventListener('click', finishTheStory);

const nome = document.querySelector('#name');
nome.addEventListener('input', typeAndScream);

function complainMessage() {
  alert("I told you not to do that " + personName);
};

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
};

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
};

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}