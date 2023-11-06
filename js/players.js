velP1 = 0;
velP2 = 0;
function movePlayerP1(){
    document.addEventListener("keydown",(e) => {
        console.log(e.key)
        if(e.key == "s"){
            document.getElementById("p1").setAttribute("y",velP1)
            velP1+=10;
        }else if(e.key == "w"){
            document.getElementById("p1").setAttribute("y",velP1)
            velP1-=10;
        }
    })
}
function movePlayerP2(){
    document.addEventListener("keydown",(e) => {
        console.log(e.key)
        if(e.key == "ArrowDown"){
            document.getElementById("p2").setAttribute("y",velP2)
            velP2+=10;
        }else if(e.key == "ArrowUp"){
            document.getElementById("p2").setAttribute("y",velP2)
            velP2-=10;
        }
    })
}