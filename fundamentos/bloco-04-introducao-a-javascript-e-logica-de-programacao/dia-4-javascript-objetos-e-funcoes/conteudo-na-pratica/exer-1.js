// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// 1 - Crie um objeto player contendo as variáveis listadas acima.
let gamer = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log(`A jogadora ${gamer.name} ${gamer.lastName} tem ${gamer.age} anos de idade`);

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

gamer.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]
console.log(gamer.bestInTheWorld);

// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log(`A jogadora ${gamer.name} ${gamer.lastName} foi eleita a melhor do mundo por ${gamer.bestInTheWorld.length} vezes.`);

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(`A jogadora possui ${gamer.medals.golden} medalhas de ouro e ${gamer.medals.silver} medalhas de prata.`);