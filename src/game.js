import Player from "./player";
import InputHandler from "./inputHandler";
import Skeleton from "../images/BODY_skeleton.png";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
    this.gameObjects = [new Player(Skeleton, 100, 100), new Player(Skeleton, 100, 100)];

    this.input = new InputHandler(this.gameObjects[0], this);
  }

  update(timePassed) {
    this.input.handleInput()

    this.gameObjects.forEach(object => object.update(timePassed));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
