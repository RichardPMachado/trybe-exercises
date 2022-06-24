let numerosPrimos = [2,3]
let maiorNumeroPrimo;

for (let index = 4; index < 50; index+=1) {
    let count = 0
    for (let index2 = 2; index2 < index; index2+=1){
        if (index % index2 == 0 ){
            count += 1 
        }
    }
    if ( count === 0){
        numerosPrimos.push(index)
    }

}
maiorNumeroPrimo = numerosPrimos[numerosPrimos.length-1]
//console.log(numerosPrimos); se quiser todos numeros primos
console.log(`o maior numero primo entre 2 e 50 é ${maiorNumeroPrimo}.`);