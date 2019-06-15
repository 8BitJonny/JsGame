import missingImg from "../images/imageNotFound.jpg";

export default class Renderable {
  constructor(
    image = missingImg,
    startFrame = 0,
    frameCount = 0,
    framesx = 1,
    framesy = 1,
    speed = 1,
    animation = false
  ) {
    this.img = new Image();
    this.img.src = image;

    this.frame = startFrame;
    this.startFrame = startFrame;         //the frame of the sprite to start off with
    this.frameCount = frameCount;         //how many frames it should render after the startFrame before it starts with the startFrame again (for Animation)

    // How many frames the sprite has vertically and horizontally
    this.framesx = framesx;
    this.framesy = framesy;

    // How wide and high a frame is in the sprite
    this.frameWidth = this.img.width / this.framesx;
    this.frameHeight = this.img.height / this.framesy;

    // speed of animation and next timestamp when the frame should be changed
    this.speed = speed;
    this.animation = animation;
    this.animTime = new Date().getTime();
  }

  draw(ctx) {
    let t = new Date().getTime();
    if (t > this.animTime && this.animation) {
      this.frame++;
      this.animTime = t + 1000 / this.speed;
    }

    // if we displayed the lastFrame set the next frame to be the startFrame again
    if (this.frame > this.startFrame + this.frameCount) {
      this.frame = this.startFrame;
    }

    // determine which x and y position the frame has in the sprite
    let posx = (this.frame % this.framesx) * this.frameWidth;
    let posy = Math.floor(this.frame / this.framesx) * this.frameHeight;

    ctx.drawImage(
      this.img,
      posx,
      posy,
      this.frameWidth,
      this.frameHeight,
      0,
      0,
      this.frameWidth,
      this.frameHeight
    );
  }
}
