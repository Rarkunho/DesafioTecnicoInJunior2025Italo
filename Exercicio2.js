function Fatorar(numero){
    if(numero == 0){
        return 1;
    }
    return numero * Fatorar(numero - 1);
}

let repetir = true;
while(repetir){
    let numero;
    let numeroValido = false;
    while(numeroValido == false){  
        numero = parseFloat(prompt("Digite o Numero a ser Fatoriado"));
        if(numero >= 0 && !(isNaN(numero))){
            numeroValido = true;
        } else {
            alert("Numero Invalido, digite novamente");
        }
    }
    alert("Fatorial de "+ numero + ": " + Fatorar(numero));
    
    let escolhido = false;
    while(escolhido == false){
        let escolha;
        escolha = prompt("Deseja calcular o fatorial de outro numero?");
        if(escolha == "s" || escolha == "S"){
            repetir = true;
            escolhido = true;
        }else if(escolha == "n" || escolha == "N"){
            repetir = false;
            escolhido = true;
            alert("Programa encerrado");
        } else {
            alert("Digite uma opção válida");
        }
    }
}