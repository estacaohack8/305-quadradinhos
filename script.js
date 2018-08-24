function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let quadradinhos = document.querySelectorAll('.quadradinho');

const cores = ['yellow', 'blue', 'red', 'green'];

for(quadradinho of quadradinhos){
    quadradinho.onmouseenter = function(){
        this.style.backgroundColor = cores[aleatorio(0,3)];
    }
}