let px = 50;
let vx = 10;

function moveBall() {
    let ball = document.getElementById("ball");
    let container = document.getElementById("svg");
    if ((parseInt(ball.getAttribute("cx")) - 30) > 0 && (parseInt(ball.getAttribute("cx")) + 30)<500) {
        reloadPos();
    } else {
        vx = -1 * vx;
        reloadPos();
    }
}

function reloadPos() {
    px = parseInt(ball.getAttribute("cx"));
    ball.setAttribute("cx", px + vx);
}
