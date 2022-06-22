let array = [];
let resultadoDivisao = 0

for (let index = 1; index < 26; index+=1) {
    array.push(index);
}

for (let count = 0; count < array.length; count+=1) {
    resultadoDivisao = array [count] / 2
    console.log(resultadoDivisao);
}


