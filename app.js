let x,y,boneco;
function define(){
    boneco = document.getElementById("boneco");
    x = 100;
    y = 100;

    boneco.style.top = y+"px";
    boneco.style.left = x+"px";

}

document.onkeydown = function(event){

    var tecla; //variavel pra receber a tecla que foi pressionada

    if(event==onkeyup){
        let e = document.getElementById("boneco");
        e.id = 'boneco2'
    }
    else{ tecla=event.keyCode;}

    if (x >=-2 && x<=480) {
        if(tecla == 39) {
            boneco.className= "borda";
            x=x+3;
            boneco.style.left=x+"px";
        }
    }
    if (x<=1054 && x>=-1) {
        if (tecla == 37){
            //esquerda
                boneco.className= "borda";
                x=x-3;
                boneco.style.left=x+"px";
        }
    }


    if(y>=-170 && y<=130) {
        if(tecla == 40) {
            boneco.className= "borda";
            y=y+3;
            boneco.style.top=y+"px";
        }

    }
    if(tecla == 38) {
        if(y>=-160) {
            boneco.className= "borda";
            y=y-3;
            boneco.style.top=y+"px";
        }
    }

    if(y >= -158) {
        if(x>=140 && x<=235) {
            alert("Game over!");
            location.reload();
        }
        if(x>=360 && x<=455) {
            alert("Game over!");
            location.reload();
        }
    }
    if(y <=120) {
        if(x<=345&& x>=251) {
            alert("Game over!");
            location.reload();
        }
    }
    if(y >=130) {
        if(x>=457) {
            alert("You win!");
            location.reload();
        }
    }
    if(x <=80) {
            alert("Game Over!");
            location.reload();
    }
}