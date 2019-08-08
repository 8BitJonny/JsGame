const { GameObject } = require("./gameObject.js");
const { SpriteInterpreter } = require("./spriteInterpreter.js");

module.exports.Projectile = class Projectile extends GameObject{
    constructor(game) {
        let projectileStartX = game.character.position.x +20;
        let projectileStartY = game.character.position.y +10;
        
        let spriteInterpreter = new SpriteInterpreter(game.assetLoader.sprites["ball"], 1, 0, 7, 4, 2, 0, 0, 10);
        super(spriteInterpreter, projectileStartX, projectileStartY);
        this.game = game;
    }
    spawn() {
        this.game.objects.push(this);
        let projectileVelocity = this.game.objects[this.game.objects.length -1].velocity;
        let projectileSpeed = 6;

        if(this.game.character.velocity.x > 0){
            projectileVelocity.x = projectileSpeed;
        } else if(this.game.character.velocity.x < 0){
            projectileVelocity.x = -projectileSpeed;
        };
        if(this.game.character.velocity.y > 0){
            projectileVelocity.y = projectileSpeed;
        } else if(this.game.character.velocity.y < 0){
            projectileVelocity.y = -projectileSpeed;
        };
        if(this.game.character.velocity.x === 0 && this.game.character.velocity.y === 0){
            projectileVelocity.y = projectileSpeed;
        };
    }
}
