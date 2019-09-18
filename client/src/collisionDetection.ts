import GameObject  from "./gameObject";
import Vector from "./vector";

export default class CollisionDetection {
    colliders: GameObject[];

    constructor(colliders: GameObject[]) {
        this.colliders = colliders;
    };

    addCollidier(obj: GameObject) {
        this.colliders.push(obj);
    };

    isColliding(position: Vector, hitBox: { width: number, height: number }) {
        let isColliding = false;
        this.colliders.forEach(collider => {
            if (position.x <= collider.position.x + collider.hitBox.width
             && position.x + hitBox.width >= collider.position.x
             && position.y <= collider.position.y + collider.hitBox.height
             && position.y + hitBox.height >= collider.position.y) {
                isColliding = true;
            }
        });

        return isColliding;
    };
};