export default class CollisionDetection {
    constructor(colliders) {
        this.colliders = colliders;
    }

    addCollidier(obj) {
        if (obj instanceof GameObject) {
            this.colliders.push(obj)
        };
    };

    isColliding(position, hitBox, velocity) {
        let newPosition = position.copy();
        newPosition.add(velocity);

        this.colliders.forEach(collider => {
            console.log("----");
            console.log("NewPosition: ", newPosition);
            console.log("Collider: ", collider);
            console.log("Velocity: ", velocity);
            if (newPosition.x <= collider.position.x + collider.hitBox.width
             && newPosition.x + hitBox.width >= collider.hitBox.width) {
                velocity.x = 0;
            };

            if (newPosition.y <= collider.position.y + collider.hitBox.height
             && newPosition.y + hitBox.height >= collider.position.y) {
                 velocity.y = 0;
             };
        });
        return velocity;
    };
};