/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maze extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Maze/costumes/costume1.svg", {
        x: 226.5,
        y: 124
      }),
      new Costume("costume2", "./Maze/costumes/costume2.svg", {
        x: 180.0888472206973,
        y: 128.01788504045004
      }),
      new Costume("costume3", "./Maze/costumes/costume3.svg", {
        x: 212.24912373099642,
        y: 135.19708331241736
      }),
      new Costume("costume4", "./Maze/costumes/costume4.svg", {
        x: 361.1212158203125,
        y: 210.96893310546875
      })
    ];

    this.sounds = [new Sound("pop", "./Maze/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "m" }, this.whenKeyMPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.effects.ghost = 100;
  }

  *whenKeyMPressed() {
    if (this.stage.vars.ghost == 1) {
      this.effects.ghost = 100;
      this.stage.vars.ghost = 0;
      this.broadcast("Hide");
    } else {
      this.effects.ghost = 0;
      this.stage.vars.ghost = 1;
      this.broadcast("Show");
      this.penDown = false;
      this.clearPen();
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.ghost = 0;
  }

  *whenGreenFlagClicked3() {
    this.stage.watchers.player.visible = false;
    this.stage.watchers.Player1x.visible = false;
    this.stage.watchers.Player2x.visible = false;
    this.stage.watchers.Player2y.visible = false;
    this.stage.watchers.Player1y.visible = false;
    this.stage.watchers.Player1.visible = false;
  }

  *whenGreenFlagClicked4() {
    this.size = 40;
    this.costume = "costume4";
  }
}
