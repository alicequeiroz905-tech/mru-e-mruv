// random do que será digitado
let entrada = ['V','SI','SF','T'];
let entradaAleatoria;
let entradaNecessaria = entradaAleatoria; 
// pegando o id e a posição do foguete
const foguete = document.getElementById("xy");
const posicao = window.getComputedStyle(foguete);
// pegando o id dos botões
const botao = document.getElementById("start");
const novamissao = document.getElementById("novaMissao");
// pegando o id do resultado, tempo, espaço e velocidade
const resultado = document.getElementById("resultado");
const tempoinput = document.getElementById("tempo");
const espacoinicialinput = document.getElementById("espacoinicial");
const espacofinalinput = document.getElementById("espacofinal");
const velocidadeinput = document.getElementById("velocidade");
// pegando o input e seu valor
const input = document.getElementById("entrada");
const inputValue = input.value;
const floatValue = parseFloat(inputValue);

let velocidade;
let tempo;
let posicaoFinal;
let posicaoInicial;
let posicaoX = parseFloat(posicao.top);

valores();

novamissao.disabled = true;
novamissao.addEventListener("click", () =>{
    botao.disabled = false;
    novamissao.disabled = true;
    posicaoX = parseFloat(posicao.top);
    resultado.textContent = 'RESULTADO...'; 
    foguete.style.left = posicaoX + 'px'
    valores();
});

botao.addEventListener("click", () => {
    botao.disabled = true;
    mover();
});

function valores(){
        entradaAleatoria = entrada[Math.floor(Math.random() * entrada.length)];
        entradaNecessaria = entradaAleatoria; 
        if (entradaNecessaria == 'V'){
        // limpa tudo antes de preencher
        tempoinput.textContent = '?';
        espacoinicialinput.textContent = '?';
        espacofinalinput.textContent = '?';
        velocidadeinput.textContent = '?';

        posicaoFinal = Math.floor(Math.random() * (3099 - 100 + 1) + 100 );
        espacofinalinput.textContent =posicaoFinal;
        posicaoInicial = (Math.floor(Math.random() * posicaoFinal));
        espacoinicialinput.textContent =posicaoInicial;
        tempo = Math.floor(Math.random() * 10) + 1;
        tempoinput.textContent =tempo;
        velocidade = Math.floor((posicaoFinal - posicaoInicial)/tempo);
    }
    else if (entradaNecessaria == 'SI'){
        tempoinput.textContent = '?';
        espacoinicialinput.textContent = '?';
        espacofinalinput.textContent = '?';
        velocidadeinput.textContent = '?';

        posicaoFinal = Math.floor(Math.random() * (3099 - 100 + 1) + 100 );
        espacofinalinput.textContent =posicaoFinal;
        velocidade = Math.floor(Math.random() * 400) + 1;
        tempo = Math.floor(Math.random() * 10) + 1;
        while (posicaoFinal - velocidade * tempo <= 0){
            velocidade = Math.floor(Math.random() * 400) + 1;
            tempo = Math.floor(Math.random() * 10) + 1;
        }
        tempoinput.textContent =tempo;
        velocidadeinput.textContent = velocidade;
        posicaoInicial = posicaoFinal - velocidade * tempo;
    }
    else if (entradaNecessaria == 'SF'){
        tempoinput.textContent = '?';
        espacoinicialinput.textContent = '?';
        espacofinalinput.textContent = '?';
        velocidadeinput.textContent = '?';

        posicaoInicial = Math.floor(Math.random() * (3099 - 100 + 1) + 100 );
        espacoinicialinput.textContent =posicaoInicial;
        tempo = Math.floor(Math.random() * 10) + 1;
        tempoinput.textContent =tempo;
        velocidade = Math.floor(Math.random() * 400) + 1;
        velocidadeinput.textContent = velocidade;
        posicaoFinal = posicaoInicial + velocidade * tempo;
    }
    else if (entradaNecessaria == 'T'){
        tempoinput.textContent = '?';
        espacoinicialinput.textContent = '?';
        espacofinalinput.textContent = '?';
        velocidadeinput.textContent = '?';

        posicaoFinal = Math.floor(Math.random() * (3099 - 100 + 1) + 100 );
        espacofinalinput.textContent =posicaoFinal;
        posicaoInicial = (Math.floor(Math.random() * posicaoFinal));
        espacoinicialinput.textContent =posicaoInicial;
        velocidade = Math.floor(Math.random() * 400) + 1;
        velocidadeinput.textContent = velocidade;
        tempo = Math.floor((posicaoFinal - posicaoInicial) / velocidade);
    }
}

function mover(){
    const inputValue = input.value;
    const floatValue = parseFloat(inputValue);
    posicaoX += 2;
    foguete.style.left = posicaoX + 'px';
    animacaoid = requestAnimationFrame(mover);
    if (entradaNecessaria == 'V'){
         if (velocidade == floatValue){
        resultado.textContent = "GANHOU!!!";
        if (posicaoX == 520){
            cancelAnimationFrame(animacaoid);
            botao.disabled = false;
            novamissao.disabled = false;
            input.value = '';
        }
        return;
    }
        else{
            resultado.textContent = 'PERDEU! Tente de Novo';
            if(posicaoX == 400){
            cancelAnimationFrame(animacaoid);
            botao.disabled = false;
            novamissao.disabled = false;
            input.value = '';
            }
            return;
        }
    }
    else if (entradaNecessaria == 'SI'){
        if (posicaoInicial == floatValue){
            resultado.textContent = "GANHOU!!!!";
            if (posicaoX == 520){
                cancelAnimationFrame(animacaoid);
                botao.disabled = false;
                novamissao.disabled = false;
                input.value = '';
        }
            return;
    }
        else{
            resultado.textContent = "PERDEU! Tente de Novo!";
            if(posicaoX == 400){
            cancelAnimationFrame(animacaoid);
            botao.disabled = false;
            novamissao.disabled = false;
            input.value = '';
            }
            return;
        }
    }
    else if (entradaNecessaria == 'SF'){
        if (posicaoFinal == floatValue){
        resultado.textContent = "GANHOU!!!!";
        if (posicaoX == 520){
            cancelAnimationFrame(animacaoid);
            botao.disabled = false;
            novamissao.disabled = false;
            resultado.textContent = ' '
            input.value = '';
        }
        return;
    }
        else{
            resultado.textContent = "PERDEU! Tente de Novo!";
            if(posicaoX == 400){
            cancelAnimationFrame(animacaoid);
            botao.disabled = false;
            novamissao.disabled = false;
            input.value = '';
            }
            return;
        }
    }
    else if (entradaNecessaria == 'T'){
        if (tempo == floatValue){
            resultado.textContent = "Ganhou!";
            if (posicaoX == 520){
                cancelAnimationFrame(animacaoid);
                botao.disabled = false;
                novamissao.disabled = false;
                input.value = '';
            }
            return;
        }
        else{
            resultado.textContent = "PERDEU! Tente de Novo!";
            if(posicaoX == 400){
            cancelAnimationFrame(animacaoid);
            botao.disabled = false;
            novamissao.disabled = false;
            input.value = '';
            }
            return;
        }
    } 
}