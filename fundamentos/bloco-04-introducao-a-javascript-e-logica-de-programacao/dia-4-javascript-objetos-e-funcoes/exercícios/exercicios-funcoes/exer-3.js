
let aux = 0
function array(numeros=[]) {
  menorNumero = numeros.length
  for (let index in numeros){
    if (numeros[index] <= menorNumero){
      aux = index
      menorNumero = numeros[index]
    }
  }
  return menorNumero;
}

array([2, 4, 6, 7, 10, 0, -3]);
console.log(`O menor número da array é o ${menorNumero} e se encotra na posição ${aux}.`);
