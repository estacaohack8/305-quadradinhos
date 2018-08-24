function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let quadradinhos = document.querySelectorAll('.quadradinho');

const cores = ['yellow', 'blue', 'red', 'green'];

// Função foi criada com nome de 'bg' para tornar o código mais legível.
function bg(quadradinho){
    return quadradinho.style.backgroundColor;
}

function encerrarJogo(){
    for(quadradinho of quadradinhos){
        quadradinho.onmouseenter = null;
    }
    alert("Parabéns, fim de jogo!");
}

for(quadradinho of quadradinhos){
    quadradinho.onmouseenter = function(){
        this.style.backgroundColor = cores[aleatorio(0,3)];

        if(bg(quadradinhos[0]) === bg(quadradinhos[1]) &&
           bg(quadradinhos[1]) === bg(quadradinhos[2]) &&
           bg(quadradinhos[2]) === bg(quadradinhos[3])){
                encerrarJogo();
           }
    }
}