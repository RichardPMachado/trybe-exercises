let maiorNumero = 0
let aux = 0
function array(numeros=[]) {
  for (let index in numeros){
    if (numeros[index] >= maiorNumero){
      aux = index
      maiorNumero = numeros[index]
    }
  }
  return maiorNumero;
}

array([2, 3, 6, 7, 10, 1]);
console.log(`O maior numero da array é o ${maiorNumero} e se encotra na posição ${aux}.`);
