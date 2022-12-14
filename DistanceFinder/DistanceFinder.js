/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DistanceFinder extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./DistanceFinder/costumes/costume1.svg", {
        x: 3.1709185550851373,
        y: 3.1274999999999977
      })
    ];

    this.sounds = [new Sound("pop", "./DistanceFinder/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Find Distance" },
        this.whenIReceiveFindDistance
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveFindDistance() {
    yield* this.getDistance();
    if (this.stage.vars.ghost == 0) {
      this.broadcast("draw");
    } else {
      null;
    }
  }

  *getDistance() {
    this.stage.vars.allDistances = [];
    this.stage.vars.distance = 0;
    this.stage.vars.angle = -50;
    for (let i = 0; i < 100; i++) {
      this.stage.vars.distance = 0;
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
      this.direction = this.sprites["Player"].direction + this.stage.vars.angle;
      while (
        !(
          this.touching(this.sprites["Maze"].andClones()) ||
          this.touching(this.sprites["Sprite1"].andClones()) ||
          this.stage.vars.distance > 100
        )
      ) {
        this.move(1);
        this.stage.vars.distance += 1;
      }
      if (
        this.touching(this.sprites["Maze"].andClones()) ||
        this.stage.vars.distance > 100
      ) {
        this.stage.vars.allDistances.push(this.stage.vars.distance);
      } else {
        this.stage.vars.allDistances.push(0 - this.stage.vars.distance);
      }
      this.stage.vars.angle += 1;
    }
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    yield* this.getDistance();
    this.broadcast("draw");
  }
}
