const comparacao = (meuNumero, numero) => meuNumero  === numero;


const resultSorteio = (minhaAposta, resultado) =>  {
 const numeroSorteado = Math.round(Math.random() * 5)
 console.log(numeroSorteado)
  
    return resultado(minhaAposta, numeroSorteado) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(resultSorteio(1, comparacao))