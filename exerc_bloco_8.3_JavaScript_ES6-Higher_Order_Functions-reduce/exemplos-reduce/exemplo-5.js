// [
//     { name: 'Jorge', materia: 'Português' },
//     { name: 'Mario', materia: 'Biologia' },
//     { name: 'Jorge', materia: 'Português' },
//     { name: 'Maria', materia: 'Química' },
//     { name: 'Natalia', materia: 'Português' },
//     { name: 'Wilson', materia: 'Português' },
// ]

// const getBestClass = (acc, class) => {
//     if (acc.nota > class.nota) 
//     return acc;
//     return class;
//   };
  
//   const reportBetter = (students) => {
//     return students.map((student) => {
//       return {
//         name: student.nome,
//         materia: student.materias.reduce(getBestClass).name,
//       };
//     });
//   };
  
//   console.log(reportBetter(estudantes));