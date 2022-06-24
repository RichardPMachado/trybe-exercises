let pXadrez = "RaiNha"
let movimento;
switch (pXadrez.toLowerCase()) {
    case "peão":
      movimento = "Peão: Se movimenta 1 casa para frente (é possivel se movimentar 2 casas para frente, quando ainda não foi usado) e só ataca na diagonal."
    break;
  
    case "bispo":
      movimento = "Bispo: Se movimenta para qualquer diagonal quantas casas quiser."
    break;
  
    case "cavalo":
      movimento = "Cavalo: Se movimenta em L (avança duas casas para qualquer direção, horizontalmente ou verticalmente e uma para qualquer um dos dois lados), a única peça que pode passar por cima de outra peça."
    break;
  
    case "torre":
      movimento = "Torre: Pode se movimentar quantas casas quiser tanto horizontalmente quanto verticalmente."
    break;
  
    case "rainha":
      movimento = "Rainha: Pode se movimentar quantas casas quiser, tanto horizontalmente,  quanto verticalmente e na diagonal também."
    break;
  
    case "rei":
      movimento = "Rei: Pode se movimentar 1 casa para qualquer direção, tanto horizontalmente,  quanto verticalmente e na diagonal também."
    break;
  
    default:
      console.log("Peça Inválida");
  }

  console.log(movimento);
