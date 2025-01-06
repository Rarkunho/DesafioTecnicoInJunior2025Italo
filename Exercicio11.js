
let lista = [];

let n = parseInt(prompt("digite a quantidade de numeros da lista."));
for(let i = 0; i < n; i++){
    let mensagem = "Lista atual:\n" + lista + "\nDigite um numero inteiro a lista. N = " + n;
    let numero = parseInt(prompt(mensagem));
    lista.push(numero);
}

let paresCrescentes = 0;

for(let i = 0; i < n - 1; i++){
    if(lista[i] < lista[i+1]){
        paresCrescentes++;
    }
}
alert("Lista:\n"+lista+"\nPares de Numeros Crescentes: "+ paresCrescentes);

