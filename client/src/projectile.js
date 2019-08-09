const { GameObject } = require("./gameObject.js");
const { SpriteInterpreter } = require("./spriteInterpreter.js");

module.exports.Projectile = class Projectile extends GameObject{
    constructor(character, timeOfCreation, sprite, objects ) {
        let projectileStartX = character.position.x +20;
        let projectileStartY = character.position.y +10;
        
        let spriteInterpreter = new SpriteInterpreter(sprite, 1, 0, 7, 4, 2, 0, 0, 10);
        super(spriteInterpreter, projectileStartX, projectileStartY);
        this.PROJECTILESPEED = 6;
        this.LIFESPAN = 0.7;
        this.objects = objects;
        this.timeOfCreation = timeOfCreation;
        this.character = character;
        console.log(character);
        
    }
    spawn() {
        this.objects.push(this);
        let projectileVelocity = this.velocity;
        let characterVelo = this.character.velocity;

        if(characterVelo.x > 0){
            projectileVelocity.x = this.PROJECTILESPEED;
        } else if(characterVelo.x < 0){
            projectileVelocity.x = -this.PROJECTILESPEED;
        };
        if(characterVelo.y > 0){
            projectileVelocity.y = this.PROJECTILESPEED;
        } else if(characterVelo.y < 0){
            projectileVelocity.y = -this.PROJECTILESPEED;
        };
        if(characterVelo.x === 0 && characterVelo.y === 0){
            projectileVelocity.y = this.PROJECTILESPEED;
        };
    }
    checkforDeletion(clientTime) {
        if (clientTime > this.timeOfCreation + this.LIFESPAN){
            this.toBeDeleted = true;
        }
    }
}
