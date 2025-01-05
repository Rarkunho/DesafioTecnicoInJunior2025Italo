function FizzBuzz(numero){
    let resultado = "";
    if(numero % 3 == 0){
        resultado += "fizz";
    }
    if(numero % 5 == 0){
        resultado += "buzz";
    }
    alert(resultado);
}

while(true){
    let numero;
    numero = parseFloat(prompt("Digite o número para FizzBuzz:"));
    if(isNaN(numero)){
        alert("Digite um numero válido");
        continue;
    }
    FizzBuzz(numero);
    let escolha = confirm("Outro Numero?");
    if(!escolha){
        break;
    }
}