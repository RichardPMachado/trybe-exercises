let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTodos = 0
let resultado = 0
for (let number of numbers){
    somaTodos+=number
}

resultado = somaTodos/numbers.length

console.log(`A média aritimética é ${resultado}`);