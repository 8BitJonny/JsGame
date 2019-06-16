import GameObject from "./gameObject";
import Renderable from "./renderable";
import Box from "./box";

export default class Player extends GameObject {
  constructor(imageSprite, x, y) {
    let SCALE = 1;
    let XPADDING = 34;
    let YPADDING = 10;

    let baseRenderable = new Renderable(imageSprite, SCALE, 18, 0, 9, 4, XPADDING, YPADDING, 10, true);
    super(baseRenderable, x, y);

    this.facing = 0;
    this.speed = 1;

    this.collisionDetection = null;

    this.renderables = [
      baseRenderable,
      new Renderable(imageSprite, SCALE,  1, 7, 9, 4, XPADDING, YPADDING, 10, true),
      new Renderable(imageSprite, SCALE, 27, 7, 9, 4, XPADDING, YPADDING, 10, true),
      new Renderable(imageSprite, SCALE, 19, 7, 9, 4, XPADDING, YPADDING, 10, true),
      new Renderable(imageSprite, SCALE,  9, 7, 9, 4, XPADDING, YPADDING, 10, true)
    ];
    this.hitbox = new Box(this.position, this.renderModel.frameWidth, this.renderModel.frameHeight);
  }

  update() {
    if (this.collisionDetection != null) {
      //check for Collision before updating position
      let oldX = this.hitbox.position.x;
      let oldY = this.hitbox.position.y;

      //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox
      this.hitbox.position.x += this.velocity.x;
      let isCollidingX = this.collisionDetection.isColliding(this.hitbox);

      if (isCollidingX) {
        // if it collides reset this the xVelocity
        this.velocity.x = 0;
      }

      //reset the hitbox to now check the yAxis
      this.hitbox.position = {x: oldX,y: oldY};

      //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox
      this.hitbox.position.y += this.velocity.y;
      let isCollidingY = this.collisionDetection.isColliding(this.hitbox);

      if (isCollidingY) {
        // if it collides reset this the yVelocity
        this.velocity.y = 0;
      }

      //reset the hitbox and the position because through object reference the position variable changed too
      this.hitbox.position = {x: oldX,y: oldY};
      this.position = {x: oldX,y: oldY};
    }

    super.update();

    // update the hitbox to be according to the new position
    this.hitbox.position = this.position;
  }

  translate(keysDown) {
    var x = 0, y = 0;
    let oldFacing = this.facing;

    // Change speed and faced direction according to keyboard input
    if (keysDown.includes("KeyW")) {
      y -= this.speed*0.8;
      this.facing = 1;
    }
    if (keysDown.includes("KeyS")) {
      y += this.speed*0.8;
      this.facing = 3;
    }
    if (keysDown.includes("KeyA")) {
      x -= this.speed;
      this.facing = 4;
    }
    if (keysDown.includes("KeyD")) {
      x += this.speed;
      this.facing = 2;
    }

    // Only update the current rendered Model if the player changed the faced direction
    if (oldFacing !== this.facing)
      this.renderModel = this.renderables[this.facing];

    // Update position
    this.velocity.x = x;
    this.velocity.y = y;
  }

  stopMovement() {
    this.facing = 0;
    this.velocity = { x: 0, y: 0};
    this.renderModel = this.renderables[0];
  }
}
