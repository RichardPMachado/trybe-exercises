//Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const nota = 50
//Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
if (nota > 80){
    console.log(`Parabéns! Você tirou ${nota} e foi aprovado(a)`);
}
else if (nota < 80 && nota >= 60) {
    console.log(`Você tirou ${nota} e está em nossa lista de espera`);
}
else {
    console.log(`Sinto muito! Você tirou ${nota} e foi reprovado(a)`);
}