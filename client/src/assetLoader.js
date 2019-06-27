const Map1 = require("../img/dungeon_sheet.png");
const MapData = require("../img/Testmap.json");
const Player1 = require("../img/BODY_skeleton.png");

module.exports.AssetLoader = class AssetLoader {
    constructor() {
        this.imagesToBeLoaded = 0;
        this.startedLoading = false;
        this.sprites = {};
        this.mapLayouts = {};
    }

    loadAssets() {
        this.sprites["player1"] = this._imageForPath(Player1);
        this.sprites["map1"] = this._imageForPath(Map1);

        this.mapLayouts["mapLayout1"] = MapData;
        
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