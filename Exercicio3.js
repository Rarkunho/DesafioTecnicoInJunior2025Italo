function VerificarIdades(anosPessoas, anoAtual){
    let arrayIdades = [];
    for(i = 0; i < anosPessoas.length; i++){
        let idade = (anoAtual - anosPessoas[i]);
        let maiorDeIdade = false;
        if(idade > 18){
            maiorDeIdade = true;
        }
        if(maiorDeIdade){
            arrayIdades[i] = "Maior"
            console.log("Pessoa " + i + ": Maior de idade (" + idade + " anos).");
        } else {
            arrayIdades[i] = "Menor"
            console.log("Pessoa " + i + ": Menor de idade (" + idade + " anos).");
        }
    }
    return arrayIdades;
}

let numInserido = 0;
let contador = 0;
let anosPessoas = [];

while(numInserido >= 0){
    numInserido = parseInt(prompt("Digite um ano de nascimento para adicionar ao array.\nDigite qualquer numero abaixo de 0 para parar."));
    if(numInserido >= 0){
        anosPessoas[contador] = numInserido;
        contador++;
    }
}

let anoAtual = 0;
anoAtual = parseInt(prompt("Digite o Ano Atual"));

let arrayIdades = VerificarIdades(anosPessoas, anoAtual);
console.log(arrayIdades);
