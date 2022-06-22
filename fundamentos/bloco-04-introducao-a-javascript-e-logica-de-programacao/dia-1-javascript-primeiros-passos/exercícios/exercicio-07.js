const porcentagem = 95;
let nota;

if (porcentagem >= 90 && porcentagem <= 100){
  nota = "A";
} else if (porcentagem >= 80){
  nota = "B";
} else if (porcentagem >= 70){
  nota = "C";
} else if (porcentagem >= 60){
  nota = "D";
} else if (porcentagem >= 50){
  nota = "E";
} else if (porcentagem < 50){
  nota = "F";
} else {
  console.log("Valor de pontos invalido")
}
console.log(`Sua nota é "${nota}"`);
 
  
