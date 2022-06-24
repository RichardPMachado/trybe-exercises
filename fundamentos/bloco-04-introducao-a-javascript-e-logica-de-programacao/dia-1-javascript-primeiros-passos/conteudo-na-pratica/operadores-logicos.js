// Operador AND
// const currentHour = 4; //numero entre 4 e 24
// let message;

// if (currentHour >= 22 ) {
//   message = 'Não deveríamos comer nada, é a hora de dormir';
// } else if (currentHour >=18) {
//   message = 'Rango da noite, vamos jantar :D';
// } else if(currentHour >= 14){
//   message = "Vamos fazer um bolo pro café da tarde?";
// }else if (currentHour >=11){
//     message = "Hora do almoço!!!";
// } else {
//     message = "Hmmm, cheiro de café recém passado"; 
// }
//   console.log(message)
//==========================================================================

//Operador OU

let weekDay = ['sexta-feira']

if(weekDay === "segunda-feira" || weekDay === "terça-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else if("quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
   console.log("FINALMENTE, descanso merecido UwU");
}
