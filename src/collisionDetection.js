import Box from "./box";

export default class collisionDetection {
    constructor(colliders) {
        this.colliders = colliders;
    }

    addCollider(obj) {
        if (obj instanceof Box) {
            this.colliders.push(obj);
        }
    }

    isColliding(hitBox) {
        let isColliding = false;
        this.colliders.forEach(collider => {
            if (hitBox.position.x <= collider.position.x + collider.size.width
             && hitBox.position.x + hitBox.size.width >= collider.position.x
             && hitBox.position.y <= collider.position.y + collider.size.height
             && hitBox.position.y + hitBox.size.height >= collider.position.y) {
                isColliding = true;
            }
        });

        return isColliding
    }
}