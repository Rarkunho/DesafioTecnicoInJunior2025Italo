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

