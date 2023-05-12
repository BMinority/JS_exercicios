//RESPOSTAS
//NÍVEL 1 - básico

//exercício 1
const var1Input = document.getElementById('var1');
const var2Input = document.getElementById('var2');
const resultadoDiv = document.getElementById('resultado');
const calcularBtn = document.getElementById('exerc1-btn');
const limparBtn = document.getElementById('limparBtn');

function calcular() {
    const var1 = Number(var1Input.value);
    const var2 = Number(var2Input.value);

    const resultado = var1 + var2;

    resultadoDiv.textContent = `O resultado da soma é: ${resultado}`;
}

function limpar() {
    var1Input.value = '';
    var2Input.value = '';
    resultadoDiv.textContent = '';
}

calcularBtn.addEventListener('click', calcular);
limparBtn.addEventListener('click', limpar);


//exercício 2
const inputNome = document.getElementById('nome');
const inputSobNome = document.getElementById('sobrenome');
const exibirNome = document.getElementById('nomeCompleto');
const juntarNomeBtn = document.getElementById('nomeBtn');
const limparNomeBtn = document.getElementById('limparNome');

function nomeCompleto() {
    const nome = inputNome.value;
    const sobnome = inputSobNome.value;

    const unirNome = nome + ' ' + sobnome;
    exibirNome.textContent = `Seu nome é ${unirNome}.`;
}

function limparNome() {
    inputNome.value = '';
    inputSobNome.value = '';
    exibirNome.textContent = '';
}

juntarNomeBtn.addEventListener('click', nomeCompleto);
limparNomeBtn.addEventListener('click', limparNome);

//exercício 3
const numeroInput = document.getElementById('numero');
const exibirVerificacao = document.getElementById('exibir-verificar');
const verificarBtn = document.getElementById('verificar');
const limparNum = document.getElementById('limparNumero');

function imparOuPar () {
    const numero = Number(numeroInput.value);
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

verificarBtn.addEventListener('click', () => {
    const paridade = imparOuPar();
    if(paridade) {
        exibirVerificacao.textContent = `O número ${numeroInput.value} é par.`
        console.log(true);
    } else {
        exibirVerificacao.textContent = `O número ${numeroInput.value} é impar.`
        console.log(false);
    }
});

limparNum.addEventListener('click', () => {
    numeroInput.value = '';
    exibirVerificacao.textContent = '';
});


//exercício 4
function inverterString(str) {
    return str.split("").reverse().join("");
}

//A função "split()" é usada para dividir a string em um array de caracteres individuais.
//A função "reverse()" é usada para inverter a ordem dos caracteres no array.
//A função "join()" é usada para juntar os caracteres invertidos em uma string novamente.
const botaoInverter = document.getElementById("inverterTexto");
const campoTexto = document.getElementById("oracao");
const resultadoInversao = document.getElementById("exibir-inversao");
const limparOracaoBtn = document.getElementById("limparOracao");

botaoInverter.addEventListener("click", function() {
  const texto = campoTexto.value;
  const textoInvertido = inverterString(texto);
  resultadoInversao.textContent = textoInvertido;
});

limparOracaoBtn.addEventListener('click', () => {
    campoTexto.value = '';
    resultadoInversao.textContent = '';
});


//exercício 5
const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const exibirMaiorNumero = document.getElementById('exibir-maior');
const limparNumBtn = document.getElementById('limparNumeros');
const calcMaiorBtn = document.getElementById('maior');

function maiorNumero () {
    const a = Number(numero1Input.value);
    const b = Number(numero2Input.value);

    if(a > b) {
        exibirMaiorNumero.textContent = `O maior número é ${a}.`;
    } else {
        exibirMaiorNumero.textContent = `O maior número é ${b}.`;
    }
}

limparNumBtn.addEventListener('click', () => {
    numero1Input.value = '';
    numero2Input.value = '';
    exibirMaiorNumero.textContent = '';
});

calcMaiorBtn.addEventListener('click', maiorNumero);


//exercício 6
//Crie um objeto com informações de uma pessoa,
//como nome, idade, endereço e telefone.
const nomePessoaInput = document.getElementById("nome-pessoa");
const cellPessoaInput = document.getElementById("cell");
const salvarInfoPessoaBtn = document.getElementById("salvar-info-pessoa");
const exibirInfoPessoa = document.getElementById("exibir-info-pessoa");
const limparInfoPessoa = document.getElementById("limpar-info-pessoa");

salvarInfoPessoaBtn.addEventListener('click', () => {
    const nome = nomePessoaInput.value;
    const cell = cellPessoaInput.value;

    exibirInfoPessoa.innerHTML = `
    <ul>
    <li>Nome: ${nome}</li>
    <li>Telefone: ${cell}</li>
    </ul>
    `;
});

limparInfoPessoa.addEventListener('click', () => {
    nomePessoaInput.value ='';
    cellPessoaInput.value = '';
    exibirInfoPessoa.innerHTML = '';
});

//exercício 7
const salvarPessoaBtn = document.getElementById("salvar-pessoa");
salvarPessoaBtn.addEventListener('click', () => {
    const nome = document.getElementById("pessoa");
    const email = document.getElementById("email-pessoa");
    const endereco = document.getElementById("endereco-pessoa");
    const saudacao = document.getElementById("saudacao-pessoa");

    saudacao.innerHTML = `
    <h2>Bem-vindo ${nome.value}!</h2>
    <ul>
        <li>Seu e-mail é: ${email.value}</li>
        <li>Seu endereço é: ${endereco.value}</li>
    </ul>
    `;
});

const limparPessoaBtn = document.getElementById("limpar-pessoa");
limparPessoaBtn.addEventListener('click', () => {
    const pessoa = document.getElementById("pessoa");
    const email = document.getElementById("email-pessoa");
    const endereco = document.getElementById("endereco-pessoa");
    const saudacao = document.getElementById("saudacao-pessoa");

    pessoa.value = '';
    email.value = '';
    endereco.value = '';
    saudacao.innerHTML = '';
});


//exercício 8 UTILIZANO LOOP FOR]
function gerarNumeros() {
    let numeros = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            numeros += "FizzBuzz";
        } else if (i % 3 == 0) {
            numeros += "Fizz";
        } else if (i % 5 == 0) {
            numeros += "Buzz";
        } else {
            numeros += i + " ";
        }
    }
    document.getElementById("numeros-gerados").innerHTML = numeros;
}

document.getElementById("gerar-numeros").addEventListener("click", gerarNumeros);

document.getElementById("resetar").addEventListener("click", function() {
    document.getElementById("numeros-gerados").innerHTML = "";
});


//exercício 9
const buttonSomarNumeros = document.getElementById('somar-numeros');
const divExibirSoma = document.getElementById('exibir-soma');

buttonSomarNumeros.addEventListener('click', () => {
    let primeiro = document.getElementById("primeiro");
    let segundo = document.getElementById("segundo");
    let terceiro = document.getElementById("terceiro");
    const numeros = [
        primeiro.value,
        segundo.value,
        terceiro.value
    ];

    const soma = numeros.reduce((acumulador, valorAtual) => {
        return acumulador + parseInt(valorAtual);
    }, 0);

    divExibirSoma.innerHTML = `A soma dos números é ${soma}`;
});

const buttonResetarSoma = document.getElementById('resetar-soma');
buttonResetarSoma.addEventListener('click', () => {
    divExibirSoma.innerHTML = '';
    primeiro.value = '';
    segundo.value = '';
    terceiro.value = '';
});


//exercício 10
function contarPares(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

const inputArray = document.getElementById('inputArray');
const exibirPares = document.getElementById('exibir-pares');
const contarParesButton = document.getElementById('contar-pares');

contarParesButton.addEventListener('click', () => {
    
  const numeros = inputArray.value.split(',').map(num => parseInt(num.trim()));
  
  const pares = numeros.filter(num => num % 2 === 0);
  exibirPares.innerHTML = pares.join(', ');
});

document.getElementById("limparArray").addEventListener('click', () => {
    inputArray.value = '';
    exibirPares.innerHTML = '';
});

//abrir e fechar respostas
function resposta1() {
    const exibir = document.getElementById('resposta1');
    exibir.style.display = "block";
}

function resposta2() {
    const exibir = document.getElementById('resposta2');
    exibir.style.display = "block";
}

function resposta3() {
    const exibir = document.getElementById('resposta3');
    exibir.style.display = "block";
}

function resposta4() {
    const exibir = document.getElementById('resposta4');
    exibir.style.display = "block";
}

function resposta5() {
    const exibir = document.getElementById('resposta5');
    exibir.style.display = "block";
}

function resposta6() {
    const exibir = document.getElementById('resposta6');
    exibir.style.display = "block";
}

function resposta7() {
    const exibir = document.getElementById('resposta7');
    exibir.style.display = "block";
}

function resposta8() {
    const exibir = document.getElementById('resposta8');
    exibir.style.display = "block";
}

function resposta9() {
    const exibir = document.getElementById('resposta9');
    exibir.style.display = "block";
}

function resposta10() {
    const exibir = document.getElementById('resposta10');
    exibir.style.display = "block";
}

function fechar() {
    const fecharResposta1 = document.getElementById('resposta1');
    fecharResposta1.style.display = "none";

    const fecharResposta2 = document.getElementById('resposta2');
    fecharResposta2.style.display = "none";

    const fecharResposta3 = document.getElementById('resposta3');
    fecharResposta3.style.display = "none";

    const fecharResposta4 = document.getElementById('resposta4');
    fecharResposta4.style.display = "none";

    const fecharResposta5 = document.getElementById('resposta5');
    fecharResposta5.style.display = "none";

    const fecharResposta6 = document.getElementById('resposta6');
    fecharResposta6.style.display = "none";

    const fecharResposta7 = document.getElementById('resposta7');
    fecharResposta7.style.display = "none";

    const fecharResposta8 = document.getElementById('resposta8');
    fecharResposta8.style.display = "none";

    const fecharResposta9 = document.getElementById('resposta9');
    fecharResposta9.style.display = "none";

    const fecharResposta10 = document.getElementById('resposta10');
    fecharResposta10.style.display = "none";
}