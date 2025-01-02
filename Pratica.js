// //Declaração de Variáveis
// var variavel = 15;
// variavel = "oi";
// //preferencial usar o let
// let variavel2 = 16;
// const variavel3 = 17;


// //Tipos Primitivos
// variavel = 1;
// console.log(typeof variavel);
// console.log("numero = " + variavel)
// console.log(`Numero = ${variavel}`)
// //function Adicionar(){}

// //Funcoes do Navegador
// //variavel = alert("Alerta!");
// variavel = prompt("Digite Aqui");
// console.log("Usuario Digitou: "+ variavel);
// variavel = confirm("Confirma ou Não");
// console.log("Confirm: " + variavel)

//Questao 1 Teste
function Baskara(a, b, c){
    return ((b*b) - (4 * a * c));
}
let a;
let b;
let c;

a = prompt("Digite A");
b = prompt("Digite B");
c = prompt("Digite C");

let delta;
delta = Baskara(a,b,c,);

console.log("Delta = "+ delta);

if(delta > 0){

}
if(delta == 0){

}
if(delta <0){

}
