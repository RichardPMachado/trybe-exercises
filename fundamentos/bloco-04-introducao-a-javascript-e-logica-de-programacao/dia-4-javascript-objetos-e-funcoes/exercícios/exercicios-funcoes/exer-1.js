// Modo 1

let aux = 1
function verificaPalindromo (word) {

  for (let index = 0; index < word.length; index+=1 ) {
      if (word [index] === word [word.length-aux]) {
       aux+=1
      }
      
  }
  if (aux === 6){
    return true;
  } else {
    return false;
  }

}
console.log(verificaPalindromo("arara"));
console.log(verificaPalindrome('avestruz'));

//Modo 2

function verificaPalindrome(palavra){
  let palavraInvertida = palavra.split('').reverse().join('');
  if (palavra === palavraInvertida){
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('avestruz'));