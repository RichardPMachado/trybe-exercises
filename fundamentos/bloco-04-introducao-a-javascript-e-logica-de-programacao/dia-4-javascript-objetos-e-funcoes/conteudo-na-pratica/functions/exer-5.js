function ehTriangulo (a, b, c, triangulo) {
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
}

ehTriangulo (50, 30, 100)