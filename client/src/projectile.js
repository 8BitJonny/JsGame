const { GameObject } = require("./gameObject.js");
const { SpriteInterpreter } = require("./spriteInterpreter.js");

module.exports.Projectile = class Projectile extends GameObject{
    constructor(game) {
        let projectileStartX = game.character.position.x +20;
        let projectileStartY = game.character.position.y +10;
        
        let spriteInterpreter = new SpriteInterpreter(game.assetLoader.sprites["ball"], 1, 0, 7, 4, 2, 0, 0, 10);
        super(spriteInterpreter, projectileStartX, projectileStartY);
        this.game = game;
        this.timeOfCreation = this.game.networking.clientTime;
        this.PROJECTILESPEED = 6;
        this.LIFESPAN = 0.5;
        
    }
    spawn() {
        this.game.objects.push(this);
        let projectileVelocity = this.velocity;
        let characterVelo = this.game.character.velocity;

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
    checkforDeletion() {
        if (this.game.networking.clientTime > this.timeOfCreation + this.LIFESPAN){
            this.toBeDeleted = true;
        }
    }
}
