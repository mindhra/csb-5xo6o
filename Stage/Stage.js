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
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Stars", "./Stage/costumes/Stars.png", { x: 480, y: 360 })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("Dance Magic", "./Stage/sounds/Dance Magic.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 5;
    this.vars.score = 1;

    this.watchers.myVariable = new Watcher({
      label: "my variable",
      style: "normal",
      visible: true,
      value: () => this.vars.myVariable,
      x: 245,
      y: 175
    });
    this.watchers.score = new Watcher({
      label: "score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 245,
      y: 148
    });
  }

  *whenGreenFlagClicked() {
    while (!(this.vars.myVariable == 0)) {
      yield* this.playSoundUntilDone("Dance Magic");
      yield;
    }
  }
}
