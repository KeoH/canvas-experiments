import { FallingObject } from "./fallingObject";

export class BloodDrop extends FallingObject {
  constructor() {
    super();
    this.color = "#F00";
    this.reset();
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth);
    this.y = this.randBetween(0, -window.innerHeight);
    this.vx = this.randBetween(-1, 1);
    this.vy = this.randBetween(5, 9);
    this.radius = this.randBetween(1, 4);
    this.alpha = this.randBetween(0.8, 1);
  }
}
