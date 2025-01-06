

let filaDeAtendimento = [];
while(true){
    let mensagemPrompt = "Escolha sua opção.\n1 - Novo Cliente.\n2 - Atender Cliente.\n3 - Sair.\n";
    for(cliente in filaDeAtendimento){
        let posicao = parseInt(cliente) + 1;
        mensagemPrompt += posicao + "° " + filaDeAtendimento[cliente] + ". ";
    }
    let escolha = parseInt(prompt(mensagemPrompt));
    switch (escolha) {
        case 1:
            let nome = prompt("Digite o nome do cliente a ser adicionado");
            if(nome.length > 0){
                filaDeAtendimento.push(nome);
            } else {
                alert("Nome não digitado");
            }
            break;
        case 2:
            if(filaDeAtendimento.length > 0){
                alert("Atendendo Cliente " + filaDeAtendimento[0]);
                filaDeAtendimento.shift();
            } else {
                alert("Sem Clientes para atender");
            }
            break;
        default:
            break;
    }
    if(escolha == 3){
        break;
    }
}