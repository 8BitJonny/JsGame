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

    moveToKeepObjectFocused(gameObject) {
        let localPosition = this.getLocalPosition(gameObject);
        this.frameCount = this.frameCount === 1 ? 2 : 1;

        if (localPosition.x < window.innerWidth * 0.25) {
            if (this.frameCount === 1) {
                this.position.x += 1;    
            } else {
                this.position.x += 2;
            };
        };

        if (localPosition.x > window.innerWidth * 0.75){
            if (this.frameCount === 1) {
                this.position.x -= 1;
            } else {
                this.position.x -= 2;
            };
        };
        
        if (localPosition.y < window.innerHeight * 0.25){
            if(this.frameCount === 1) {
                this.position.y += 1;
            } else {
                this.position.y += 2;
            };
        };
        
        if (localPosition.y > window.innerHeight * 0.75){    
            if (this.frameCount === 1) {
                this.position.y -= 1; 
            } else {
                this.position.y -= 2;
            };
        };    
    };
};