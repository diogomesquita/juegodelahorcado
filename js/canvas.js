function desenharCanvas() {
    jogo.lineWidth = 8;
    jogo.lineCap = "round";
    jogo.lineJoin = "round";    
    jogo.fillStyle = "#F3F5FC"
    jogo.strokeStyle = "#0A3871"

    jogo.fillRect(0, 0, 768, 400);
    jogo.beginPath();
    jogo.moveTo(20, 350);
    jogo.lineTo(300, 350);
    jogo.stroke();
    jogo.closePath();
}

function desenharLinhas() {
    jogo.lineWidth = 6;
    jogo.lineCap = "round";
    jogo.lineJoin = "round";    
    jogo.fillStyle = "#F3F5FC";
    jogo.strokeStyle = "#0A3871";

    let tracinhosPalavra = 300/segredo.length;
    for(let i = 0; i < segredo.length; i++) {
        jogo.moveTo(20+(tracinhosPalavra * i), 450);
        jogo.lineTo(50+(tracinhosPalavra * i), 450);
    }
    jogo.stroke();
    jogo.closePath();
}

function escreverAcerto(index) {
    jogo.font = "bold 42px Inter";
    jogo.lineCap = "round";
    jogo.fillStyle = "#0A3871";
    jogo.lineWidth = 5;
    let tracinhosPalavra = 300/segredo.length;
    jogo.fillText(segredo[index], 20 + (tracinhosPalavra * index), 430);
}

function escreverErro(letra, erros) {
    jogo.font = "bold 34px Inter";
    jogo.lineCap = "round";
    jogo.fillStyle = "#0A3871";
    jogo.lineWidth = 5;
    jogo.fillText(letra, 20 + (25 * (10 -erros)), 500, 20);
}

function verificarAcertos() {
    if(acertos === segredo.length) {
        jogo.fillText("GOLAZO!!", 60, 310)
        document.onkeydown = (e) => {
            window.location.reload();
        }
    }
}

function bonequinho(gameOver) {

    if(gameOver === 8){
        jogo.moveTo(20, 350);
        jogo.lineTo(20, 50);
        jogo.stroke();
    }

    if(gameOver === 7){
        jogo.moveTo(20, 50);
        jogo.lineTo(220, 50);
        jogo.stroke();
    }

    if(gameOver === 6){
        jogo.moveTo(210, 50);
        jogo.lineTo(210, 100);
        jogo.stroke();
    }

    if(gameOver === 5){
        jogo.arc(210, 120, 20, 0, Math.PI*2, true);
        jogo.stroke();
    }

    if(gameOver === 4){
        jogo.moveTo(210, 140);
        jogo.lineTo(210, 200);
        jogo.stroke();
    }

    if(gameOver === 3){
        jogo.moveTo(210, 200);
        jogo.lineTo(240, 250);
        jogo.stroke();
    }

    if(gameOver === 2){
        jogo.moveTo(210, 200);
        jogo.lineTo(180, 250);
        jogo.stroke();
    }

    if(gameOver === 1){
        jogo.moveTo(210, 155);
        jogo.lineTo(240, 160);
        jogo.stroke();
    }

    if(gameOver === 0){
        jogo.moveTo(210, 155);
        jogo.lineTo(180, 160);
        jogo.stroke();
    }

    if(gameOver === -1) {
        jogo.fillText("MARCHASTE!", 50, 300)
        document.onkeydown = (e) => {
            window.location.reload();
        }
    }
}