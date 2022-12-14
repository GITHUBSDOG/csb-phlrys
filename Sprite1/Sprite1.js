/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 0.4309199870425289,
        y: 0.42994505494510804
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Show" }, this.whenIReceiveShow)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(0, 10);
      if (this.stage.vars.player == 1) {
        this.goto(this.stage.vars.Player2x, this.stage.vars.Player2y);
      } else {
        this.goto(this.stage.vars.Player1x, this.stage.vars.Player1y);
      }
      yield;
    }
  }

  *whenIReceiveHide() {
    this.effects.ghost = 100;
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
  }

  *whenIReceiveShow() {
    this.effects.ghost = 0;
  }
}
