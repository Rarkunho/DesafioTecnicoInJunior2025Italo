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

// //Questao 1 Teste
// function RaizPositiva(a , b, delta){
//     return ((-b + Math.sqrt(delta))/(2 * a));
// }
// function RaizNegativa(a, b, delta){
//     return ((-b - Math.sqrt(delta))/(2 * a));
// }
// function RaizReal(a, b){
//     return (-b/(2 * a));
// }

// function Baskara(a, b, c){
//     return ((b*b) - (4 * a * c));
// }
// let a;
// let b;
// let c;

// //Isso não funciona.
// while((typeof a) != "number"){
//     a = parseFloat(prompt("Digite A"));
// }
// while((typeof b) != "number"){
//     b = parseFloat(prompt("Digite B"));;
// }
// while((typeof c) != "number"){
//     c = parseFloat(prompt("Digite C"));
// }

// let delta;
// delta = Baskara(a,b,c,);

// console.log("Delta = "+ delta);

// let x1;
// let x2;

// if(delta > 0){
//     x1 = RaizPositiva(a, b, delta);
//     x2 = RaizNegativa(a, b, delta);
//     console.log("Raízes Reais:\nx1: " + x1 + "  x2: " + x2);
// } else if(delta == 0){
//     x1 = RaizReal(a, b);
//     x2 = x1;
//     console.log("Raíz Real Unica:\nx = " + x1);
// }else if(delta <0){
//     console.log("Não há raízes reais");
// } else {
//     console.log("Delta Invalido")
// }

//Questao 2

// Exercicio Aula 5
let nome = prompt("Digite o seu Nome");
let idade = 0;

idade = prompt("Digite sua idade");
if(idade < 16){
    alert("Você tem menos de 16 anos, acesso negado");
} else {
    let desconto = 0;
    let estudante = false;
    estudante = confirm("Você é estudante?");
    if(idade >= 18){
        if(estudante){
            if(idade >= 25){
                desconto = 30;
            } else{
                desconto = 20;
            }
        } else {
            desconto = 10;
        }
        alert("Nome: " + nome +"\nPercentual de Desconto: " + desconto +"%");
    } else if(idade >= 16 && idade < 18){
        if(estudante){
            desconto = 20;
        } else {
            desconto = 10;
        }
        alert("Nome: " + nome +"\nPercentual de Desconto: " + desconto +"%\nVocê precisa de autorização de um responsável.");
    }  
}

