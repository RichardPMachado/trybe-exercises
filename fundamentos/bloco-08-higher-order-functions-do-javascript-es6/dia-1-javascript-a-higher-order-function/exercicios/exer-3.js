const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const avaliacao = (respostasCorretas, respostaEstudante) => {
  const acertos = 1;
  const respostaErrada = -0.5;
  
  if (respostaEstudante === respostasCorretas){
    return acertos;
  };

  if (respostaEstudante === 'N.A'){
    return 0;
  };

  return respostaErrada;
  
};

const prova = (gabarito, respostasAluno, avaliacao) => {
  let nota = 0
  for( let index in respostasAluno) {
    nota += avaliacao(gabarito[index], respostasAluno[index]);
    
  }
  return nota;
};

console.log(prova(RIGHT_ANSWERS, STUDENT_ANSWERS, avaliacao));

