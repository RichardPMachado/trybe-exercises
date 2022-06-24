let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra;
let maiorPalavra;

for (let index = 0; index < array.length; index+=1) {
    if (array[index] == array[0]){
        menorPalavra = array[index]
        maiorPalavra = array[index]
    } else if (menorPalavra.length > array[index].length) {
        menorPalavra = array[index]
    } else if(maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index]
    }
}
console.log(`A maior palavra é ${maiorPalavra} e a menor palavra é ${menorPalavra}.`)
// if (menorPalavra[0].length < maiorPalavra[2].length){
//     console.log(menorPalavra);
// }