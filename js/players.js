function movePlayerP1(){
    document.addEventListener("keydown",(e) => {
        console.log(e.key)
        if(e.key == "s"){
            toMove("p1",10);
        }else if(e.key == "w"){
            toMove("p1",-10);
        }
    })
}
function movePlayerP2(){
    document.addEventListener("keydown",(e) => {
        console.log(e.key)
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
