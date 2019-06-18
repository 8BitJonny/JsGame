import Game from "./game";

let canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

let GAME_WIDTH = 900;
let GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;
let firstStartup = true;

async function gameLoop(timestamp) {
  if (firstStartup) {
    drawLoading();
    await sleep(1000);
    firstStartup = false;
  }

  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function drawLoading() {
  let x = canvas.width/2;
  let y = canvas.height/2;
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Loading", x, y);
}