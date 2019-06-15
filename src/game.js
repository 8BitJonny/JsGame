import Player from "./player";
import InputHandler from "./inputHandler";
import Map from "./map";
import Skeleton from "../images/BODY_skeleton.png";
import MapImg from "../images/tileset.png";
import MapData from "../images/testmap.json";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;

    let character = new Player(Skeleton, 100, 100);
    let npc = [new Player(Skeleton, 100, 100)];
    let map = new Map(MapData, MapImg, 4, 4, 1);

    this.gameObjects = [map, ...npc, character];

    this.input = new InputHandler(character, this);
  }

  update(timePassed) {
    this.input.handleInput();

    this.gameObjects.forEach(object => object.update(timePassed));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
