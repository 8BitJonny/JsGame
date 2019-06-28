module.exports.AssetLoader = class AssetLoader {
    constructor() {
        this.imagesToBeLoaded = 0;
        this.startedLoading = false;
        this.sprites = {};
        this.mapLayouts = {};
    }

    loadMapData() {
        const MapData = require("../img/Testmap.json");

        this.mapLayouts["mainLobby"] = MapData;
    }

    loadAssets() {
        const Player1 = require("../img/BODY_skeleton.png");
        const Map1 = require("../img/dungeon_sheet.png");

        this.sprites["player1"] = this._imageForPath(Player1);
        this.sprites["mainLobby"] = this._imageForPath(Map1);

        this.loadMapData();

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