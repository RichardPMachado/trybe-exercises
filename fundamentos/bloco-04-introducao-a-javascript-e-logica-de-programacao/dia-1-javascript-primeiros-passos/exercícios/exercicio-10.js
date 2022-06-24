const valorCusto = 50
const valorVenda = 100
let lucroTotal;
let lucro;
if (valorVenda > 0 && valorCusto > 0){
    const valorCustoTotal = valorCusto +((valorCusto / 100)* 20)
    lucro = valorVenda - valorCustoTotal
    lucroTotal = lucro * 1000
} else{
    console.log("Houve um erro, favor inserir os dados novamente.");
}

console.log(`Lucro referente a venda de 1000 produtos é de R$${lucroTotal},00.`);
