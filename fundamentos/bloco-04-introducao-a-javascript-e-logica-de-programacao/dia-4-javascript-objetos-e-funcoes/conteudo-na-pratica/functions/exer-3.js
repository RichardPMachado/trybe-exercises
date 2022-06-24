function maiorMenor(a,b,c) {

  if (a > b && a > c){
    console.log(`A = ${a} é maior que B = ${b} e C = ${c}`);
  } else if (b > a && b > c){
    console.log(`B = ${b} é maior que A = ${a} e C = ${c}`);
  } else {
    console.log(`C = ${c} é maior que A = ${a} e B = ${b}`);
  }
}

maiorMenor (15, 12, 16)