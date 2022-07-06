let aux = 0
function array(palavras=[]) {
  maiorPalavra = palavras[0]
  for (let index in palavras){
    if (palavras[index].length >= maiorPalavra.length){
      aux = index
      maiorPalavra = palavras[index]
    }
  }
  return maiorPalavra;
}

array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(`O maior número da array é o ${maiorPalavra} e se encotra na posição ${aux}.`);