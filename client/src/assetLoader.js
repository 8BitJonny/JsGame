import Player1 from "../img/BODY_skeleton.png";
import Map1 from "../img/dungeon_sheet.png";

export default class AssetLoader {
    constructor() {
        this.imagesToBeLoaded = 0;
        this.startedLoading = false;
        this.sprites = {};
    }

    loadAssets() {
        this.sprites["player1"] = this._imageForPath(Player1);
        this.sprites["map1"] = this._imageForPath(Map1);
        
        this.startedLoading = true;
    };

    isFinishedLoading() {
        return this.imagesToBeLoaded <= 0 && this.startedLoading;
    };

    _imageForPath(path) {
        let newImage = new Image();
        newImage.src = path;
        newImage.addEventListener('load', _ => {
            this.imagesToBeLoaded--
        }, false);
        this.imagesToBeLoaded++;
        return newImage;
    };
};