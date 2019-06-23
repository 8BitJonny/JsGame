import Game from "./game";

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

let game = new Game(canvas.width, canvas.height);

const gameLoop = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    game.update();
    game.draw(ctx);
    
    requestAnimationFrame(gameLoop);
};

gameLoop();
