function config(){
    game = {
        svg : document.getElementById("svg"),
        player1 : document.getElementById("p1"),
        player2 : document.getElementById("p2"),
        ball : document.getElementById("ball"),
        radio : parseInt(document.getElementById("ball").getAttribute("r")),
        c1: document.getElementById("c1"),
        c2: document.getElementById("c2"),
        line: document.getElementById("line"),
        g1: document.getElementById("g1"),
        g2: document.getElementById("g2"),
    }
    ballConfig={
        velY : 1,
        velX : 1,
        px : 50,
        py : 50,
    }
    game.c1.setAttribute("x", (game.svg.clientWidth/2)-70)
    game.c2.setAttribute("x", (game.svg.clientWidth/2)+70)
    game.line.setAttribute("x", (game.svg.clientWidth/2))
    game.player1.setAttribute("y", (game.svg.clientHeight/2.5));
    game.player1.setAttribute("x", 60);
    game.g1.setAttribute("y", (game.svg.clientHeight/3));
    game.player2.setAttribute("y", (game.svg.clientHeight/2.5));
    game.player2.setAttribute("x", (game.svg.clientWidth-80));
    game.g2.setAttribute("y", (game.svg.clientHeight/3));
    game.g2.setAttribute("x", (game.svg.clientWidth)-10);
    game.ball.setAttribute("cy", (game.svg.clientHeight/2.5));
    game.ball.setAttribute("cx", (game.svg.clientWidth/2));
}