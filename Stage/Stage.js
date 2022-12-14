/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backroom", "./Stage/costumes/backroom.svg", {
        x: 244.5,
        y: 183.625
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.distance = 14;
    this.vars.counter = 101;
    this.vars.angle = 50;
    this.vars.ghost = 0;
    this.vars.x = 18.018096465116937;
    this.vars.y = -4.246520799379669;
    this.vars.rotation = -120;
    this.vars.Player2x = 18.018096465116937;
    this.vars.Player2y = -4.246520799379669;
    this.vars.Player1x = 0;
    this.vars.Player1y = 0;
    this.vars.Player1 = "true";
    this.vars.player = 2;
    this.vars.allDistances = [
      23,
      23,
      23,
      23,
      23,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      25,
      25,
      25,
      25,
      25,
      25,
      26,
      26,
      26,
      26,
      27,
      28,
      30,
      30,
      30,
      31,
      31,
      30,
      31,
      30,
      30,
      31,
      30,
      31,
      31,
      32,
      32,
      33,
      34,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      29,
      29,
      29,
      28,
      27,
      27,
      27,
      27,
      27,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      25,
      25,
      25,
      25,
      25,
      25,
      26,
      26,
      26,
      26,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14,
      -14
    ];
  }

  *whenGreenFlagClicked() {
    if (this.vars.Player1 == "true") {
      this.vars.player = 2;
      this.vars.Player2x = 10;
      this.vars.Player2y = 10;
    } else {
      this.vars.player = 1;
      this.vars.Player1 = "true";
      this.vars.Player1x = 0;
      this.vars.Player1y = 0;
    }
  }
}
