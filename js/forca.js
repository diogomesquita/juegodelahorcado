let jogo = document.querySelector("#forca").getContext('2d');
let segredos = [{palavra:"DEUS", conceito: "é amor"}, {palavra:"VIDA", conceito:"benção"}, {palavra:"FAMILIA", conceito: "apoio"},
{palavra:"GRATIDAO", conceito: "uma forma de oração"}, {palavra:"SUCESSO", conceito:"Consequência do esforço"},
{palavra:"LIBERDADE", conceito: "direito de todos"}, {palavra:"PAZ", conceito: "requer equilíbrio"}, {palavra: "RESPEITO", conceito: "é um dever"},
{palavra:"OBJETIVO", conceito:"saber o que quer"}, {palavra:"ESCOLHAS", conceito: "livre arbítrio"}];
let segredo = "";
let dica = "";
let letras = [];
let erros = [];
let acertos = 0;
let gameOver = 9;

function sortearPalavra() {
    let palavra = segredos[Math.floor(Math.random() * segredos.length)];
    segredo = palavra.palavra;
    dica = palavra.conceito;
    console.log(segredo);
    console.log(dica);

    document.querySelector(".dica").innerHTML += `<p>${dica}</p>`;
}

function verificarLetra(key) {
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        return estado;
    } else {
        estado = true;
        letras.push(key);
        return estado;
    }
}

function contarErros() {
    gameOver -= 1;
    bonequinho(gameOver);
}

function iniciarJogo() {
    document.querySelector(".menuInicial").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("#receptor").focus();
    sortearPalavra();

    desenharCanvas();
    desenharLinhas();

    document.querySelector("#receptor").addEventListener("keyup", (e) => {
        let letra = e.key.toUpperCase();

        if(!letras.includes(letra)){
            if(verificarLetra(letra) && segredo.includes(letra)) {
                for(let i = 0; i < segredo.length; i++) {
                    if(segredo[i] === letra){
                        escreverAcerto(i);
                        acertos++;
                    }
                }
            } else {
                if(!erros.includes(letra)) {
                    contarErros();
                    escreverErro(letra, gameOver);
                    erros.push(letra);
                }
            }
    
            verificarAcertos();
            console.log(acertos);
        }
    });

    document.onclick = (e) => {
        e.preventDefault();
        document.querySelector("#receptor").focus();
    }

    document.ontouchstart = (e) => {
        e.preventDefault();
        document.querySelector("#receptor").focus();
    }
}