function moveBall() {
    let ball = document.getElementById("ball");
    let container = document.getElementById("svg");
    if ((parseInt(ball.getAttribute("cx"))-20)>0 && (parseInt(ball.getAttribute("cx")) + 20)<container.clientWidth) {
        reloadPos();
    } else {
        ballConfig.velX = -1 * ballConfig.velX;
        reloadPos();
    }
    if ((parseInt(ball.getAttribute("cy"))-20)>0 && (parseInt(ball.getAttribute("cy")) + 20)<container.clientHeight) {
        reloadPos();
    } else {
        ballConfig.velY = -1 * ballConfig.velY;
        reloadPos();
    }
}
function reloadPos() {
        ballConfig.px = parseInt(ball.getAttribute("cx"));
        ball.setAttribute("cx", ballConfig.px + ballConfig.velX);
        ballConfig.py = parseInt(ball.getAttribute("cy"));
        ball.setAttribute("cy", ballConfig.py + ballConfig.velY);
}
