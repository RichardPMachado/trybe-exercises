const a = 50
const b = 30
const c = 100

let triangulo;

if (a < 0 || b < 0 || c < 0) {
    console.log("Valor inválido! Escrever valores positivos")
} else {
    if (a + b + c === 180){
        triangulo = true
        console.log(`${triangulo}! É um triangulo`)
    } else {
        triangulo = false
        console.log(`${triangulo}! Não é um triangulo`)
    }
}