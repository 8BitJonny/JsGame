import Game from "./game";

let canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

let game = new Game(canvas.width, canvas.height);
let lastTime = 0;

checkIfLoadedAndReload();

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

//This method checks if the images have been already loaded. If not 
//it waits for them to finish loading and reloads the page passing the paremeter on
//that now the images have been loaded and the game can start
function checkIfLoadedAndReload() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('hasLoaded');

  waitForLoading();

  if(myParam != "true") {
    location.replace(location.origin + '?hasLoaded=true');
  }
}

async function waitForLoading() {
  if (game.loadingImages() == true) {
    console.log("WAITING");
    await sleep(100);
    waitForLoading()
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}