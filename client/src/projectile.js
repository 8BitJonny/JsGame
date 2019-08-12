const { GameObject } = require("./gameObject.js");
const { SpriteInterpreter } = require("./spriteInterpreter.js");

module.exports.Projectile = class Projectile extends GameObject{
    constructor(character, timeOfCreation, sprite, objects, pressedKeys ) {
        let projectileStartX = character.position.x +20;
        let projectileStartY = character.position.y +10;
        
        let spriteInterpreter = new SpriteInterpreter(sprite, 1, 0, 7, 4, 2, 0, 0, 10);
        super(spriteInterpreter, projectileStartX, projectileStartY);
        this.PROJECTILESPEED = 6;
        this.LIFESPAN = 0.7;
        this.objects = objects;
        this.timeOfCreation = timeOfCreation;
        this.character = character;
        this.projectileVelocity = this.velocity;
        this.characterVelo = this.character.velocity;
        this.lastInputID = -1;
        this.inputHistory = [];
        this.pressedKeys = pressedKeys;
    }
    spawn() {
        this.objects.push(this);
        if(this.pressedKeys.includes("KeyW")) {
            this.projectileVelocity.y = - this.PROJECTILESPEED;
        } else if (this.pressedKeys.includes("KeyS")) {
            this.projectileVelocity.y = this.PROJECTILESPEED;
        } if (this.pressedKeys.includes("KeyA")) {
            this.projectileVelocity.x = - this.PROJECTILESPEED;
        } else if (this.pressedKeys.includes("KeyD")) {
            this.projectileVelocity.x = this.PROJECTILESPEED;
        } 
    }
    checkforDeletion(clientTime) {
        if (clientTime > this.timeOfCreation + this.LIFESPAN || (this.projectileVelocity.x === 0 && this.projectileVelocity.y === 0)){
            this.toBeDeleted = true;
        }
    }
}
