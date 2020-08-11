const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Metodo simplificado para mostrar as chaves de um objeto.
// const listKeys = (obj) =>  Object.keys(obj);
// console.log(listKeys(lesson1));


// Mostrando chaves de um objeto.
const listKeys = obj => {
    const key = Object.keys(obj);
    return key;
}
console.log(listKeys(lesson3));