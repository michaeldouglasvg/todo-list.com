function changeColor(color){
    let colors = ["orange", "blue", "black", "yellow", "purple", "gold", "white", "indigo"];
    let random = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".wrapper").style.background = random;
}