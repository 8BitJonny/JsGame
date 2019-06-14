import GameObject from "./gameObject";
import Renderable from "./renderable";

export default class Player extends GameObject {
  constructor(imageSprite, x, y) {
    let baseRenderable = new Renderable(imageSprite, 18, 0, 9, 4, 10)
    
    super(baseRenderable, x, y);

    this.facing = 0;
    this.speed = 1;

    this.renderables = [
      baseRenderable,
      new Renderable(imageSprite,  1, 7, 9, 4, 10),
      new Renderable(imageSprite, 27, 7, 9, 4, 10),
      new Renderable(imageSprite, 19, 7, 9, 4, 10),
      new Renderable(imageSprite,  9, 7, 9, 4, 10)
    ]
  }

  translate(inDirection) {
    var x = 0, y = 0;
    let oldFacing = this.facing;

    // Change speed and faced direction according to keyboard input
    switch(inDirection) {
      case 'KeyW': 
        y = -this.speed;
        this.facing = 1;
        break;
      case 'KeyS': 
        y = this.speed;
        this.facing = 3;
        break;
      case 'KeyA': 
        x = -this.speed;
        this.facing = 4;
        break;
      case 'KeyD': 
        x = this.speed;
        this.facing = 2;
        break;
    }

    // Only update the current rendered Model if the player changed the faced direction
    if (oldFacing != this.facing)
      this.renderModel = this.renderables[this.facing]

    // Update position
    this.position.x += x;
    this.position.y += y;
  }

  stopMovement() {
    this.facing = 0;
    this.renderModel = this.renderables[0];
  }
}
