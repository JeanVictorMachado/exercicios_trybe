//3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex++) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex++) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition--;
};

