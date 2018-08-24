let quadradinhos = document.querySelectorAll('.quadradinho');

for(quadradinho of quadradinhos){
    quadradinho.onmouseenter = function(){
        this.style.backgroundColor = "yellow";
    }
}