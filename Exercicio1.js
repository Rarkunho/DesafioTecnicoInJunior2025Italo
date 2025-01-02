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
while((typeof a) != "number"){
    a = parseFloat(prompt("Digite A"));
}
while((typeof b) != "number"){
    b = parseFloat(prompt("Digite B"));;
}
while((typeof c) != "number"){
    c = parseFloat(prompt("Digite C"));
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
} else if(delta == 0){
    x1 = RaizReal(a, b);
    x2 = x1;
    console.log("Raíz Real Unica:\nx = " + x1);
}else if(delta <0){
    console.log("Não há raízes reais");
} else {
    console.log("Delta Invalido")
}