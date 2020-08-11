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

//adicionando nova chave com valor a um objeto.
const addNewKey = (obj, key, value) => {
    obj[key] = value;
}
addNewKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

