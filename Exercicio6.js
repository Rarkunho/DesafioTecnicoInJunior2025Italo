
function Fibonacci(n){
    if(n <= 1){
        return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}


while(true){
    let n;
    n = parseInt(prompt("Digite n para numeros da sequência Fibonacci a serem exibidos (Minimo 1 numero a ser exibido):"));
    if(isNaN(n) || n < 1){
        alert("Digite um Numero Valido");
        continue;
    }
    let resposta = "Sequencia:\n";
    for(let i = 0; i < n; i++){
        resposta += Fibonacci(i) + "\n"
        console.log(Fibonacci(i));
    }
    alert(resposta);

    let continuar;
    continuar = confirm("Digitar outro n?");
    if(!continuar){
        break;
    }
}