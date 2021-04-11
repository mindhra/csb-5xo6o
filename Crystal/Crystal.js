/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crystal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crystal-a", "./Crystal/costumes/crystal-a.svg", {
        x: 15,
        y: 15
      }),
      new Costume("crystal-b", "./Crystal/costumes/crystal-b.svg", {
        x: 12,
        y: 24
      })
    ];

    this.sounds = [
      new Sound("Magic Spell", "./Crystal/sounds/Magic Spell.wav"),
      new Sound("collect", "./Crystal/sounds/collect.wav"),
      new Sound("Dance Magic", "./Crystal/sounds/Dance Magic.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.stage.vars.myVariable = 10;
    while (true) {
      this.direction += 2;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Ball"].andClones())) {
        this.visible = false;
        this.stage.vars.score += 1;
        yield* this.playSoundUntilDone("Magic Spell");
      } else {
        null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.visible = true;
      this.goto(this.random(-240, 240), this.random(-180, 180));
      yield* this.wait(3);
      this.visible = false;
      this.stage.vars.myVariable += -1;
      if (this.stage.vars.myVariable == 0) {
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
