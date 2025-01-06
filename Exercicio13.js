const time = [];

while(true){
    let mensagem = "Opções:\n1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n4 - Calcular pontuação média\n5 - Sair\nEscolha uma opção";
    let escolha = parseInt(prompt(mensagem));
    switch (escolha) {
        case 1:
            let dadosAtuais = "";
            let nome = prompt("Digite o nome do jogador.\nDados atuais: " + dadosAtuais);
            dadosAtuais += nome + ", ";
            let idade = parseInt(prompt("Digite a idade do jogador.\nDados atuais: " + dadosAtuais));
            dadosAtuais += idade + ", ";
            let posicao = prompt("Digite a posicao do jogador.\nDados atuais: " + dadosAtuais);
            dadosAtuais += posicao + ", ";
            let pontuacao = parseInt(prompt("Digite a pontuacao do jogador.\nDados atuais: " + dadosAtuais));
            adicionarJogador(nome,idade,posicao,pontuacao);
            alert("Jogador " + nome + " adicionado.");
            break;
        case 2:
            let posicaoEscolhida = prompt("Digite a posicao desejada");
            buscarPorPosicao(posicaoEscolhida);
            break;
        case 3:
            listarTime();
            break;
        case 4:
            calcularPontuacaoMedia();
            break;
        default:
            break;
    }
    if(escolha == 5){
        alert("Saindo.");
        break;
    }
}

function adicionarJogador(nome, idade, posicao, pontuacao){
    let jogador = {
        nome : nome,
        idade : idade,
        posicao : posicao,
        pontuacao : pontuacao
    }
    time.push(jogador);
}

function buscarPorPosicao(posicao){
    let JogadoresPosicao = time.filter(jogador => {
        return jogador.posicao == posicao;
    })
    if(JogadoresPosicao.length > 0){
        let message = "Jogadores na posicao:\n";
        for(i in JogadoresPosicao){
            message += JogadoresPosicao[i].nome + ".\n";
        }
        alert(message);
    } else {
        alert("Não há jogadores na posição.");
    }
    
}

function listarTime(){
    let listaTime = "Jogadores no time:\n";
    for(i in time){
        listaTime += time[i].nome + ".\n";
    }
    alert(listaTime)
}

function calcularPontuacaoMedia(){
    let pontuacaoMediaSoma = 0;
    for(i in time){
        pontuacaoMediaSoma += time[i].pontuacao;
    }
    let pontuacaoMedia = pontuacaoMediaSoma / time.length;
    alert("Pontuação média do time: " + pontuacaoMedia.toFixed(2));
}