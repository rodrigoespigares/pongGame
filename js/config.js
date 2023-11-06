function config(){
    game = {
        svg : document.getElementById("svg"),
        player1 : document.getElementById("p1"),
        player2 : document.getElementById("p2"),
        ball : document.getElementById("ball"),
    }
    game.player1.setAttribute("y", (game.svg.clientHeight/2.5));
    game.player1.setAttribute("x", 30);
    game.player2.setAttribute("y", (game.svg.clientHeight/2.5));
    game.player2.setAttribute("x", (game.svg.clientWidth-50));
    game.ball.setAttribute("cy", (game.svg.clientHeight/2.5));
    game.ball.setAttribute("cx", (game.svg.clientWidth/2));
    ballConfig={
        velY : 20,
        velX : 20,
        px : 50,
        py : 50,
    }
}