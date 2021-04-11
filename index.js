import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ball from "./Ball/Ball.js";
import Crystal from "./Crystal/Crystal.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Ball: new Ball({
    x: 30,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 1173.913043478261,
    visible: true,
    layerOrder: 2
  }),
  Crystal: new Crystal({
    x: 109,
    y: -132,
    direction: 79,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
