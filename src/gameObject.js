export default class GameObject {
  constructor(renderModel, x, y) {
    this.position = { x: x, y: y };
    this.velocity = { x: 0, y: 0 };

    this.renderModel = renderModel;
    this.childrenGameObjs = [];
  }

  update(ctx) {
    // update the position of the obj and for all its children objects attached to it
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.childrenGameObjs.forEach(child => {
      child.update(ctx);
    });
  }

  draw(ctx) {
    // draw the gameObj and all children objects attached to it
    ctx.save();
    ctx.translate(this.position.x, this.position.y);

    if (this.renderModel)
      this.renderModel.draw(ctx);

    this.childrenGameObjs.forEach(child => {
      child.renderModel.draw(ctx);
    });

    ctx.restore();
  }

  addChild(obj) {
    // attach a GameObject to this GameObject 
    if (this.obj instanceof GameObject) {
      this.children.push(obj);
    } else {
      console.error("Child can't be added. Is not of type GameObj")
    }
  }
}
