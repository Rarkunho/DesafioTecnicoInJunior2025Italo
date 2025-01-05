function RaizPositiva(a , b, delta){
    return ((-b + Math.sqrt(delta))/(2 * a));
}
function RaizNegativa(a, b, delta){
    return ((-b - Math.sqrt(delta))/(2 * a));
}
function RaizReal(a, b){
    return (-b/(2 * a));
}

function Baskara(a, b, c){
    return ((b*b) - (4 * a * c));
}
let a;
let b;
let c;

//Isso não funciona.
while(true){
    a = parseFloat(prompt("Digite A"));
    if(isNaN(a)){
        alert("Digite um numero válido");
    } else {
        break;
    }
}
while(true){
    b = parseFloat(prompt("Digite B"));;
    if(isNaN(b)){
        alert("Digite um numero válido");
    } else {
        break;
    }
}
while(true){
    c = parseFloat(prompt("Digite C"));
    if(isNaN(c)){
        alert("Digite um numero válido");
    } else {
        break;
    }
}

let delta;
delta = Baskara(a,b,c,);

console.log("Delta = "+ delta);

let x1;
let x2;

if(delta > 0){
    x1 = RaizPositiva(a, b, delta);
    x2 = RaizNegativa(a, b, delta);
    console.log("Raízes Reais:\nx1: " + x1 + "  x2: " + x2);
    //não sei se exibir no console log é o suficiente então usei o alert também.
    alert("Delta = "+ delta + "\nRaízes Reais:\nx1: " + x1 + "  x2: " + x2);
} else if(delta == 0){
    x1 = RaizReal(a, b);
    x2 = x1;
    console.log("Raíz Real Unica:\nx = " + x1);
    alert("Delta = "+ delta + "\nRaíz Real Unica:\nx = " + x1);
}else if(delta <0){
    console.log("Não há raízes reais");
    alert("Delta = "+ delta + "\nNão há raízes reais");
} else {
    console.log("Delta Invalido");
    alert("Delta Inválido");
}