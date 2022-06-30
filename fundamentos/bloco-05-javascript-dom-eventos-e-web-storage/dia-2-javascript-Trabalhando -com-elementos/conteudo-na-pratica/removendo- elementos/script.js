// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho
let allChildren = document.querySelectorAll('#paiDoPai *'); // * para pegar tudo que esta dentro do elemento paiDoPai

for (let element of allChildren){
  if (element !== document.querySelector('#pai') && element !== document.querySelector('#elementoOndeVoceEsta') && element !== document.querySelector('#primeiroFilhoDoFilho')){
     element.remove();
  }
}
