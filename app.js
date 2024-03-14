/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.Speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//exibirTextoNaTela('h1', 'Jogo do Número Secreto');
//exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function chutarNumero() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número sercreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas = tentativas ++;
        limparCampo();
    }
   
   
    // console.log('numeroSecreto');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    //exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

/* 1. Crie uma lista vazia, com o nome listaGenerica.
  let listaGenerica = [];

/* 2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
  let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

/* 3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
  linguagensDeProgramacao.push['Java','Ruby','GoLang'];

/* 4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
  let nomes = ['Rodrigo','Ogando','Fernandes'];
  console.log(nomes[0]);

/* 5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let nomes = ['Rodrigo','Ogando','Fernandes'];
console.log(nomes[1]);

/* 6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let nomes = ['Rodrigo','Ogando','Fernandes'];
console.log(nomes[2]); */