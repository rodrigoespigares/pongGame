window.onload = () => {
    setInterval(moveBall,100);
    movePlayerP1();
    movePlayerP2();
    let footer = document.querySelector("footer");
    year = new Date()
    footer.innerHTML=`© ${year.getFullYear()}~${year.getFullYear()+1} Rodrigo Espigares Fernandez`
}