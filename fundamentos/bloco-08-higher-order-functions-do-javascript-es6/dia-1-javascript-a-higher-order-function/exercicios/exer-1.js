const callbackName = (nome) => {
  const email = nome.toLowerCase().replace(' ','_'); 
return { nome, email: `${email}@trybe.com` };
}

const newEmployees = (getId) => {
  const employees = {
    id1: getId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: getId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: getId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(callbackName))