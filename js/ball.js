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
    colision();
    point();
    window.requestAnimationFrame(moveBall);
}
function reloadPos() {
        ballConfig.px = parseInt(ball.getAttribute("cx"));
        ball.setAttribute("cx", ballConfig.px + ballConfig.velX);
        ballConfig.py = parseInt(ball.getAttribute("cy"));
        ball.setAttribute("cy", ballConfig.py + ballConfig.velY);
}
function colision(){
    if((parseInt(game.ball.getAttribute("cx"))-game.radio) <= parseInt(game.player1.getAttribute("x")) + 20 && 
        parseInt(game.ball.getAttribute("cy"))>= parseInt(game.player1.getAttribute("y"))                   && 
        parseInt(game.ball.getAttribute("cy"))<= (parseInt(game.player1.getAttribute("y"))+100) )
    {
        ballConfig.velX = -1 * ballConfig.velX;
    }
    if((parseInt(game.ball.getAttribute("cx"))+game.radio) >= parseInt(game.player2.getAttribute("x"))      && 
        parseInt(game.ball.getAttribute("cy")) >= parseInt(game.player2.getAttribute("y"))                   && 
        parseInt(game.ball.getAttribute("cy")) <= (parseInt(game.player2.getAttribute("y"))+100) )
    {
        ballConfig.velX = -1 * ballConfig.velX;
    }
}
function point(){
    if (
        ((parseInt(game.ball.getAttribute("cx")) - game.radio) <= parseInt(game.g1.getAttribute("x")+10)) &&
        parseInt(game.ball.getAttribute("cy"))>= parseInt(game.g1.getAttribute("y")) &&
        parseInt(game.ball.getAttribute("cy")) <= (parseInt(game.g1.getAttribute("y"))+300)
    ) 
    {
        config();
        let counter = parseInt(game.c2.textContent);
        if(counter<5){
            counter++;
            game.c2.innerHTML = counter;
        }else{
            win("PLAYER 2");
            ballConfig.velX=0;
            ballConfig.velY=0;
            game.c2.innerHTML = 0;
            game.c1.innerHTML = 0;
        }
        
    }
    if (
        ((parseInt(game.ball.getAttribute("cx")) + game.radio) >= parseInt(game.g2.getAttribute("x"))) &&
        parseInt(game.ball.getAttribute("cy"))>= parseInt(game.g2.getAttribute("y")) &&
        parseInt(game.ball.getAttribute("cy")) <= (parseInt(game.g2.getAttribute("y"))+300)
    ) 
    {
        config();
        let counter = parseInt(game.c1.textContent);
        if(counter<5){
            counter++;
            game.c1.innerHTML = counter;
        }else{
            win("PLAYER 1");
            ballConfig.velX=0;
            ballConfig.velY=0;
            game.c2.innerHTML = 0;
            game.c1.innerHTML = 0;
        }
        
    }
}