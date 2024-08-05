import * as THREE from "three";
import { Box } from "./Box.js";

export class Gun extends THREE.Group {
  constructor({
    position = {
      x: 0,
      y: 0,
      z: 0,
    },
    color = "#138D75",
  }) {
    super();
    this.position.set(position.x, position.y, position.z);
    this.color = color;
    this.init();
  }

  init() {
    this.hitBox = new Box({
      width: 0.1,
      height: 1,
      depth: 0.2,
      color: "black",
      position: {
        x: 0.75,
        y: -0.1,
        z: -1.5,
      },
    });
    this.add(this.hitBox);
  }
}
