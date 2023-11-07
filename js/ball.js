function moveBall() {
    if ((parseInt(game.ball.getAttribute("cx"))-game.radio)>0 && (parseInt(game.ball.getAttribute("cx")) + game.radio)<game.svg.clientWidth) {
        reloadPos();
    } else {
        ballConfig.velX = -1 * ballConfig.velX;
        reloadPos();
    }
    if ((parseInt(game.ball.getAttribute("cy"))-game.radio)>0 && (parseInt(game.ball.getAttribute("cy")) + game.radio)<game.svg.clientHeight) {
        reloadPos();
    } else {
        ballConfig.velY = -1 * ballConfig.velY;
        reloadPos();
    }
    colisionP1();
    colisionP2();
    window.requestAnimationFrame(moveBall);
}
function reloadPos() {
        ballConfig.px = parseInt(ball.getAttribute("cx"));
        ball.setAttribute("cx", ballConfig.px + ballConfig.velX);
        ballConfig.py = parseInt(ball.getAttribute("cy"));
        ball.setAttribute("cy", ballConfig.py + ballConfig.velY);
}
function colisionP1(){
    if((parseInt(game.ball.getAttribute("cx"))-game.radio) <= parseInt(game.player1.getAttribute("x")) + 20 && 
        parseInt(game.ball.getAttribute("cy"))>= parseInt(game.player1.getAttribute("y"))                   && 
        parseInt(game.ball.getAttribute("cy"))<= (parseInt(game.player1.getAttribute("y"))+100) )
    {
        ballConfig.velX = -1 * ballConfig.velX;
    }
}
function colisionP2() {
    if((parseInt(game.ball.getAttribute("cx"))+game.radio) >= parseInt(game.player2.getAttribute("x"))      && 
        parseInt(game.ball.getAttribute("cy")) >= parseInt(game.player2.getAttribute("y"))                   && 
        parseInt(game.ball.getAttribute("cy")) <= (parseInt(game.player2.getAttribute("y"))+100) )
    {
        ballConfig.velX = -1 * ballConfig.velX;
    }
}
