let NumerosSorteados = [];
let numeroLimite = 10;
let numeroEscolhido;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let tentativa;
let chute;

while(chute != numeroSecreto){
    chute = parseFloat(prompt("Digite um número entre 1 e 10:"));
    tentativa = tentativas > 1 ? "tentativas" : "tentativa";
    if(chute === numeroSecreto){
        alert("Parabéns!");
        alert(`Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${tentativa}!`);
    }
    else if(chute < numeroSecreto){
        alert(`O número secreto é maior que ${chute}`);
        tentativas++;
    }
    else{
        alert(`O número secreto é menor que ${chute}`);
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if(NumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
        console.log(NumerosSorteados);
        return numeroEscolhido;
    }
    else{
        NumerosSorteados.push(numeroEscolhido);
        console.log(NumerosSorteados);
        return numeroEscolhido;
    }
}
console.log(numeroSecreto);