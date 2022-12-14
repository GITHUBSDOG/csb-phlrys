/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Renderer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Renderer/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Renderer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "draw" }, this.whenIReceiveDraw),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide)
    ];
  }

  *draw() {
    this.goto(-238, 0);
    this.penColor = Color.rgb(225, 255, 0);
    this.penSize = 6;
    this.clearPen();
    this.penDown = false;
    this.stage.vars.counter = 1;
    for (let i = 0; i < 100; i++) {
      if (this.stage.vars.allDistances[this.stage.vars.counter - 1] > 0) {
        this.penColor = Color.rgb(250, 255, 0);
        this.penColor.v =
          2000 / this.stage.vars.allDistances[this.stage.vars.counter - 1];
      } else {
        this.penColor = Color.rgb(238, 255, 0);
      }
      this.y =
        -1500 / this.stage.vars.allDistances[this.stage.vars.counter - 1];
      this.penDown = true;
      this.y = 1500 / this.stage.vars.allDistances[this.stage.vars.counter - 1];
      this.penDown = false;
      this.x += 5;
      this.stage.vars.counter += 1;
    }
  }

  *whenIReceiveDraw() {
    yield* this.draw();
  }

  *whenIReceiveHide() {
    yield* this.draw();
  }
}
