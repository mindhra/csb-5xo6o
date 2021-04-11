/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound("Boing", "./Ball/sounds/Boing.wav"),
      new Sound("Pop", "./Ball/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyWPressed() {
    this.y += 10;
  }

  *whenKeySPressed() {
    this.y += -10;
  }

  *whenKeyAPressed() {
    this.x += -10;
  }

  *whenKeyDPressed() {
    this.x += 10;
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.goto(0, 0);
    while (true) {
      if (this.touching(this.sprites["Crystal"].andClones())) {
        this.size += 10;
      } else {
        null;
      }
      yield;
    }
  }
}
