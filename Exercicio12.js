function encontrarElementoUnico(numeros){
    //tô considerando que a função sabe como esse vetor funciona.
    let elemento;
    let repeticoes = 0;
    let indice = 0;
    while(true){
        elemento = numeros[indice];
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] == elemento){
                repeticoes++;
            }
        }
        if(repeticoes <= 1){
            break;
        }
        repeticoes = 0;
        indice++;
    }   
    return elemento;
}

let numeros = [];
let tamanhoMaxVetor = 3;

while(true){
    tamanhoMaxVetor = parseInt(prompt("Digite o tamanho máximo do vetor. Deve ser maior que 2 e impar."));
    if(isNaN(tamanhoMaxVetor) || tamanhoMaxVetor < 3 || tamanhoMaxVetor % 2 == 0){
        alert("tamanho inválido")
        continue;
    }
    GerarElementos(tamanhoMaxVetor);
    let elementoUnico;
    elementoUnico = encontrarElementoUnico(numeros);
    alert("Array: \n"+ numeros +"\nElemento Unico: " + elementoUnico);
    numeros = [];
}

function GerarElementos(n){
    let elementosRepetidos;
    if(n % 2 == 0){
        elementosRepetidos = (n - 1)/2;        
    } else {
        elementosRepetidos = Math.floor(n/2);
    }
    let i = 0;
    while(i < elementosRepetidos){
        let numeroRepetido = Math.floor(Math.random() * (tamanhoMaxVetor - 1));
        if(numeros.includes(numeroRepetido)){
            continue;
        }
        numeros.push(numeroRepetido);
        numeros.push(numeroRepetido);
        i++;
    }
    while(true){
        let numeroNaoRepetido = Math.floor(Math.random() * (tamanhoMaxVetor - 1));
        if(!numeros.includes(numeroNaoRepetido)){
            numeros.push(numeroNaoRepetido);
            break;
        }
    }
    //Implementação de embaralhar array de acordo com Javascript.info.
    numeros.sort(() => Math.random() - 0.5);
}