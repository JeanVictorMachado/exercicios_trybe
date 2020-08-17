// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => {
//   return names.some((name) => name[0] === letter);
// };

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

const notes = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyNotes = (studentNotes) => {
    return Object.values(studentNotes).every((note) => note === 'Aprovado');
  };
  
  console.log(verifyNotes(notes));