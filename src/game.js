import Player from "./player";
import InputHandler from "./inputHandler";
import Map from "./map";
import Skeleton from "../images/BODY_skeleton.png";
import MapImg from "../images/tileset.png";
import MapData from "../images/testmap.json";
import CollisionDetection from "./collisionDetection";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.DEBUG = false;
    this.width = gameWidth;
    this.height = gameHeight;

    let map = new Map(MapData, MapImg, 4, 4, 1);
    this.character = new Player(Skeleton, 100, 100);
    let npc = [new Player(Skeleton, 100, 100)];

    this.collisionDetection = new CollisionDetection([...map.colliders]);
    this.character.collisionDetection = this.collisionDetection;

    this.gameObjects = [map, ...npc, this.character];

    this.input = new InputHandler(this.character, this);
  }

  update(timePassed) {
    this.input.handleInput();

    this.gameObjects.forEach(object => object.update(timePassed));
  }

  draw(ctx) {
    if (this.loadingImages() == true) {
      this.drawLoading(ctx);
    } else {
      this.gameObjects.forEach(object => object.draw(ctx));

      if (this.DEBUG) {
        this.collisionDetection.colliders.forEach(collider => {
          collider.draw(ctx);
        });
        this.character.hitbox.draw(ctx);
      }
    }
  }

  drawLoading(ctx) {
    let x = this.width/2;
    let y = this.height/2;
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Loading", x, y);
  }

  //returns whether some images of the gameObjects are still being loaded
  loadingImages() {
    return this.gameObjects.filter(obj => {return obj.renderable.imageLoading == true}).length > 0
  }
}
