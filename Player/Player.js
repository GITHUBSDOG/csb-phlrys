/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Player/costumes/costume1.svg", {
        x: 6.75,
        y: 6.6482300884955805
      })
    ];

    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.BROADCAST, { name: "Show" }, this.whenIReceiveShow),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      if (this.keyPressed("w")) {
        this.move(2);
      }
      if (this.keyPressed("s")) {
        this.move(-2);
      }
      if (this.keyPressed("left arrow")) {
        this.direction -= 15;
      }
      if (this.keyPressed("right arrow")) {
        this.direction += 15;
      }
      if (this.touching(this.sprites["Maze"].andClones())) {
        this.goto(this.stage.vars.x, this.stage.vars.y);
        this.direction = this.stage.vars.rotation;
      }
      this.stage.vars.x = this.x;
      this.stage.vars.y = this.y;
      this.stage.vars.rotation = this.direction;
      if (this.stage.vars.player == 1) {
        this.stage.vars.Player1x = this.stage.vars.x;
        this.stage.vars.Player1y = this.stage.vars.y;
      } else {
        this.stage.vars.Player2x = this.stage.vars.x;
        this.stage.vars.Player2y = this.stage.vars.y;
      }
      this.broadcast("Find Distance");
      yield;
    }
  }

  *whenIReceiveHide() {
    this.effects.ghost = 100;
  }

  *whenIReceiveShow() {
    this.effects.ghost = 0;
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
  }

  *whenIReceiveHide2() {
    this.effects.ghost = 100;
  }
}
