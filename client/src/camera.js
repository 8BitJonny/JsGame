import Vector from "./vector";
import GameObject from "./gameObject";



export default class Camera {
    constructor() {
        this.position = new Vector(0, 0);
        this.frameCount = 1;
     };

    getLocalPosition(gameObject) {
        if(gameObject instanceof GameObject){
            return gameObject.position.add(this.position);
        };
    };

    move(gameObject) {
        let localPosition = this.getLocalPosition(gameObject);
        if(localPosition.x < window.innerWidth * 0.25){
            
            if(this.frameCount === 1){
                
                this.position.x += 1;
                this.frameCount = 2;
            }
            else{
                this.position.x += 2;
                this.frameCount = 1;
            };
        };
        if(localPosition.x > window.innerWidth * 0.75){
            
            if(this.frameCount === 1){
                
                this.position.x -= 1;
                this.frameCount = 2;
            }
            else{
                this.position.x -= 2;
                this.frameCount = 1;
            };
        };
        
        if(localPosition.y < window.innerHeight * 0.25){
            
            if(this.frameCount === 1){
                
                this.position.y += 1;
                this.frameCount = 2;
            }
            else{
                this.position.y += 2;
                this.frameCount = 1;
            };
        };
        
        if(localPosition.y > window.innerHeight * 0.75){
            
            if(this.frameCount === 1){
                
                this.position.y -= 1;
                this.frameCount = 2;
            }
            else{
                this.position.y -= 2;
                this.frameCount = 1;
            };
        };

        
    };
};