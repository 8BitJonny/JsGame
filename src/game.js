import Player from "./player";
import InputHandler from "./inputHandler";
import Map from "./map";
import Skeleton from "../ressources/images/BODY_skeleton.png";
import MapImg from "../ressources/images/tileset.png";
import MapData from "../ressources/map/testmap.json";
import CollisionDetection from "./collisionDetection";
import Networking from "./networking";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.DEBUG = false;
    this.width = gameWidth;
    this.height = gameHeight;

    this.networking = new Networking('https://bga.timonchristiansen.com:4004', (payload) => {
      for (var playerId in payload.p) {
        var serverPlayer = payload.p[playerId];
        if (this.networking.socket.userid === playerId) {
        } else {
          if (this.onlinePlayer.hasOwnProperty(playerId)) {
            var curPlayer = this.onlinePlayer[playerId];
            curPlayer.position.x = serverPlayer.position.x;
            curPlayer.position.y = serverPlayer.position.y;
            curPlayer.facing = serverPlayer.facing;
            curPlayer.renderModel = curPlayer.renderables[serverPlayer.facing];
          } else {
            this.onlinePlayer[playerId] = new Player(Skeleton, serverPlayer.position.x, serverPlayer.position.y)
          }
        }
      };
    });

    let map = new Map(MapData, MapImg, 4, 4, 1);
    this.character = new Player(Skeleton, 100, 100);
    this.onlinePlayer = {};
    let npc = [];

    this.collisionDetection = new CollisionDetection([...map.colliders]);
    this.character.collisionDetection = this.collisionDetection;

    this.gameObjects = [map, ...npc, this.character];

    this.input = new InputHandler(this.character, this);
  }

  update(timePassed) {
    this.input.handleInput();

    this.gameObjects.forEach(object => object.update(timePassed));
    for (var playerId in this.onlinePlayer) {
      if (this.onlinePlayer.hasOwnProperty(playerId)) {
        this.onlinePlayer[playerId].update(timePassed)
      };
    };

    this.networking.sendPosition(this.character);
  }

  draw(ctx) {
    if (this.loadingImages() == true) {
      this.drawLoading(ctx);
    } else {
      this.gameObjects.forEach(object => object.draw(ctx));

      for (var playerId in this.onlinePlayer) {
        if (this.onlinePlayer.hasOwnProperty(playerId)) {
          this.onlinePlayer[playerId].draw(ctx)
        };
      };

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
