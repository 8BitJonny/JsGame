import GameObject from "./gameObject";
import Map from "./map";
import Player from "./player";
import MapImg from "../img/dungeon_sheet.png";
import MapData from "../img/Testmap.json";
import PlayerImg from "../img/BODY_skeleton.png";
import InputHandler from "./inputHandler";
import CollisionDetection from "./collisionDetection";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth;
        this.height = gameHeight;
        this.objects = [];
        //this.objects.push(new GameObject(10,10,10,10), new GameObject(30,10,10,10))
        this.map = new Map(MapData, MapImg, 240, 24, 10);
        this.character = new Player(PlayerImg, 100, 100);
        this.inputHandler = new InputHandler(this.character, this);
        this.collisionDetection = new CollisionDetection([...this.map.colliders]);
        this.character.setCollisionDetectionObject(this.collisionDetection);
    };

    draw(ctx) {
        this.map.draw(ctx);
        for (var i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.draw(ctx);
        };
        this.character.draw(ctx);
    };
    
    update() {
        this.inputHandler.handleInput();
        for (var i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.update();
        };
        this.character.update();
    };
};