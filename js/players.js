function movePlayer(){
    document.addEventListener("keydown",(e) => {
        if(e.key == "s"){
            toMove("p1",10);
        }else if(e.key == "w"){
            toMove("p1",-10);
        }
        if(e.key == "ArrowDown"){
            toMove("p2",10);
        }else if(e.key == "ArrowUp"){
            toMove("p2",-10);
        }
    })
}

function toMove(id,vel){
    let posY = 0;
    posY = parseInt(document.getElementById(id).getAttribute("y"));
    document.getElementById(id).setAttribute("y",posY + vel)
}

function win(player) {
    let newDiv = document.createElement("div");
    let newX=document.createElement("button");
    let newImgX=document.createElement("img");
    newX.id="close";
    newImgX.src="img/close.png";
    newX.appendChild(newImgX);
    newX.addEventListener("click",closeAlert);
    newDiv.id="alert";
    newDiv.textContent=player+" HAS WON!! PRESS X TO PLAY AGAIN";
    newDiv.appendChild(newX);
    document.body.appendChild(newDiv);
}
function closeAlert(){
    let div = document.getElementById("alert");
    document.body.removeChild(div);
    config();
}