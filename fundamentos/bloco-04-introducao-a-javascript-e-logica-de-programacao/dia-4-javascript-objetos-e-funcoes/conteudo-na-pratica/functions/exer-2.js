function maiorMenorIgual(a, b){
  if (a > b){
    console.log(`O número A = ${a} é maior que o número B = ${b}`);
  } else if (a < b) {
    console.log(`O número A = ${a} é menor que o número B = ${b}`);
  } else {
    console.log("Os valores A e B são iguais");
  }
}

maiorMenorIgual(109, 99)