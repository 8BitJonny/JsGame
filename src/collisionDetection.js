export default class CollisionDetection {
    constructor(colliders) {
        this.colliders = colliders;
    }

    addCollidier(obj) {
        if (obj instanceof GameObject) {
            this.colliders.push(obj)
        };
    };

    isColliding(position, hitBox) {
        let isColliding = false;
        this.colliders.forEach(collider => {
            if (position.x <= collider.position.x + collider.hitBox.width
             && position.x + hitBox.width >= collider.position.x
             && position.y <= collider.position.y + collider.hitBox.height
             && position.y + hitBox.height >= collider.position.y) {
                isColliding = true;
            }
        });

        return isColliding
    }
};