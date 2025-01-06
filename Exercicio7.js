
function Palindromo(frase){
    let palindromo = [];
    for(let i = (frase.length - 1); i >= 0; i--){
        palindromo.push(frase[i]);
    }
    if(palindromo.join("") === frase.join("")){
        alert(`${palindromo.join("")} é igual a ${frase.join("")}.\nÉ um palindromo.`)
        return true;
    } else {
        alert(`${palindromo.join("")} é diferente de ${frase.join("")}.\nNão é um palindromo.`)
        return false;
    }
}

while(true){
    let frase = "";
    frase = prompt("Digite a frase");
    frase = frase.toLowerCase(frase);

    let fraseSeparada = frase.split(" ");
    frase = fraseSeparada.join("");

    let fraseArray = frase.split("");

    console.log(Palindromo(fraseArray));

    let continua = confirm("Outra frase?");
    if(!continua){
        break;
    }
}