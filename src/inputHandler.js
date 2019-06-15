export default class InputHandler {
  constructor(player, game) {
    this.keysDown = [];
    this.player = player;

    document.addEventListener("keydown", event => {
      //onKeyDown of movement keys -> add to list
      switch (event.code) {
        case "KeyW":
        case "KeyA":
        case "KeyS":
        case "KeyD":
          if (!this.keysDown.includes(event.code))
            this.keysDown.unshift(event.code)
      }
    });

    document.addEventListener("keyup", event => {
      //onKeyUp of movement keys -> remove them from the list and if it was the last tell the player to stop
      switch (event.code) {
        case "KeyW":
        case "KeyA":
        case "KeyS":
        case "KeyD":
          let index = this.keysDown.indexOf(event.code);
          if (index > -1) 
            this.keysDown.splice(index, 1);
          if (this.keysDown.length === 0)
            this.player.stopMovement();
      }
    });
  };

  isKeyDown(keyCode) {
    return this.keysDown[keyCode];
  }

  handleInput() {
    // tell the player which keys are pressed and let him handle the movements
    if (this.keysDown.length > 0) {
      this.player.translate(this.keysDown);
    }
  }
}
