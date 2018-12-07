import { Scene } from "../engine/scene";
import { BloodDrop } from "../assets/bloodDrop";

export class Blood extends Scene {
  constructor() {
    super();
  }

  start() {
    super.start();
    this.createBloodDrops();
  }

  createBloodDrops() {
    const drops = window.innerWidth / 6;
    this.drawables = [];
    for (let s = 0; s < drops; s++) {
      this.drawables.push(new BloodDrop());
    }
  }

  update() {
    super.update();

    for (const flake of this.drawables) {
      flake.update(this.gameManager.ctx);
    }
    requestAnimationFrame(this.updateBound);
  }
}
