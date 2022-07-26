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

// // ======================= exer 1 ===========================================

const addTurnoNoite = (objeto, chave, valor) => {
  return objeto[chave] = valor;
}
console.log(addTurnoNoite(lesson2, 'turno', 'noite'));

// ======================= exer 2 ===========================================

const listaChaves = (objeto) => {
   return Object.keys(objeto);
}
console.log(listaChaves(lesson3));

// ======================= exer 3 ===========================================

const tamanhoObjeto = (objeto) => {
  return Object.keys(objeto).length;
}
console.log(tamanhoObjeto(lesson1));

// ======================= exer 4 ===========================================

const valorObjeto = (objeto) => {
  return Object.values(objeto);
}
console.log(valorObjeto(lesson2));

// ======================= exer 5 ===========================================

const allLessons = Object.assign({lesson1, lesson2, lesson3})
console.log(allLessons);

// ============ ou ==============

const allLessons1 = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons1);

// ======================= exer 6 ===========================================

const numEstudantes = (objeto) => {
  let count = 0;
  const numChaves = Object.keys(objeto);
  for (let index in numChaves) {
    count += objeto[numChaves[index]].numeroEstudantes;
  }
  return count;
}

console.log(numEstudantes(allLessons))

// ======================= exer 7 ===========================================

const valorChave = (lesson ,indice) => {
  return Object.values(lesson)[indice];
}

console.log(valorChave(lesson1, 0))

// ======================= exer 8 ===========================================

const verifica = (objeto, chave, valor) => {
  const entries = Object.entries(objeto);
  let eIgual = false;
  for (let index in entries) {
    if (entries[index][0] === chave && entries[index][1] === valor) {
      eIgual = true;
    }  
  }
  return eIgual;
}
console.log(verifica(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifica(lesson3, 'materia', 'Maria Clara'));
// Output: false

// ======================= Bonus 1 ===========================================

const matEstudantes = (objeto) => {
  let count = 0;
  const value =  Object.values(objeto);
  for (let index in value) {
    const materia = Object.values(value);
    if (materia[index].materia === 'Matemática') {
      count += materia[index].numeroEstudantes
    }
  }
  return count;
}
console.log(matEstudantes(allLessons));

// ======================= Bonus 2 ===========================================

const criarRelatorio = (objeto, professor) => {
  let materia = [];
  const value =  Object.values(objeto);
  for (let index in value) {
    const obj = Object.values(value);
    if (obj[index].professor === professor) {
      materia.push(obj[index].materia)
    }
  }
  return {
    professor: professor,
    aulas: materia,
    estudantes: matEstudantes(allLessons)
  }
}

console.log(criarRelatorio(allLessons, 'Maria Clara'))
