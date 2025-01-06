const taxaEuro = 6.1;
const taxaDolar = 5.7;

function Converter(valor, taxa){
    return (valor/taxa);
}

while(true){
    let valor;
    valor = parseFloat(prompt("Digite o valor em R$ para ser convertido"));
    if(isNaN(valor)){
        alert("Numero não valido");
        continue;
    }
    let terminar = confirm("Valor digitado : R$"+ valor.toFixed(2) + "\nValor em Euro: €"+ Converter(valor,taxaEuro).toFixed(2) + "\nValor em Dolar: $"+ Converter(valor,taxaDolar).toFixed(2) + "\nDeseja Continuar?");
    if(!terminar){
        break;
    }
}