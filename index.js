// Intrevista técnica Gustavo Henrique

// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// Função para gerar a sequência de Fibonacci
function veficarNumeroFibonnaci(contagem,valorEntrada) {
    let fibonnaci = [];

    fibonnaci[0] = 0;
    fibonnaci[1] = 1;

    for (let i = 2; i < contagem; i++) {
        fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
    }

    let valorCondicao ;
    for(let i = 0; i < fibonnaci.length; i++ ){
        if(fibonnaci[i] === valorEntrada){
           valorCondicao = true;
           break;
        }
    }

    if(!valorCondicao){
        console.log(`O número ${valorEntrada} não consta na sequência de fibonnaci!`);
        console.log('----------------------------------------------------------------')
    }else{
        console.log(`O número ${valorEntrada} consta na sequência de fibonnaci!`);
        console.log('----------------------------------------------------------------')
    }
    
    console.log(fibonnaci);

    console.log('----------------------------------------------------------------');
}

veficarNumeroFibonnaci(10,3);

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

const texto = 'AbacAxi';
let conta_A = 0;
let conta_a = 0; 
for(let i = 0 ; i<texto.length; i++){
    if(texto[i] ==='a'){
        conta_a++;
    }else if(texto[i]==='A'){
        conta_A++;
    }
}

console.log(`Quantidade de ocorrências da letra a na variável texto ${conta_a}`);
console.log(`Quantidade de ocorrências da letra A na variável texto ${conta_A}`);

// 3º) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

let indice = 12;
let soma = 0;
let k = 1;

while(k<indice){
    soma += k;
    k++;
}

console.log(`Resultado da soma ${soma}`);
// Ao final do processamento, qual será o valor da variável SOMA?
// Resposta : Número 66.


// ---------------------------------------------------------------------------------------------
 /*4) Descubra a lógica e complete o próximo elemento:
 a) 1, 3, 5, 7, ___ >>>>>>>> 9
 
 Debug
Aqui aparentemente a lógica e multiplicar por 2 
 b) 2, 4, 8, 16, 32, 64, ____ >>>>>>>>>>> 128
 
Debug 
 0**2|1**2|2**2|3**2|4**2|5**2|6**2         7**2 
 c) 0, 1, 4, 9, 16, 25, 36, ____ >>>>>>>>>> 49

Debug
    2^2 4^2  6^2 8^2 6^2 
    d) 4, 16, 36, 64, ____ >>>>>>>>>>>>  100

 e) 1, 1, 2, 3, 5, 8, ____ >>>>>>>>>> 13

Aparentemente é casca de banana!
 f) 2,10, 12, 16, 17, 18, 19, ____ >>>>>>>>>>>> 20

 */

// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

/*
   1- Ligaria o interruptor 1  por mais ou menos uma hora pra lâmpada esquentar e depois desligaria.
   2- Ligaria o interrumptor 2  imediatamente.
   3 - visitaria duas salas.

   Como eu faria pra identificar qual interruptor e correspondente aquela sala?
   A lâmpada que estiver muito quente é referente ao interruptor 1 .
   A lâmpada que está acesa e referente ao interruptor 2 .
   A lâmpada que está fria e referente ao interruptor 3 que eu nem liguei portanto a lampada fica fria.


    Agora para saber quanl é a sala que corresponde a terceira lâmpada. 
*/
