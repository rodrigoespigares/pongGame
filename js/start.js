function start(){
    document.getElementById("startButton").addEventListener("click",() => {
        document.getElementById("index").style.display = "none";
        document.getElementById("game").style.display = "flex";
        config();
        movePlayer();
        window.requestAnimationFrame(moveBall);
    })
}