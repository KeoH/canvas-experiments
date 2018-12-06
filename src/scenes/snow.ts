
import { Scene } from '../engine/scene';
import { SnowFlake } from '../assets/snowflake';

export class Snow extends Scene {
    constructor() {
      super();
      this.createSnowflakes();
    }
  
    createSnowflakes() {
      const flakes = window.innerWidth / 4;
      this.drawables = [];
      for (let s = 0; s < flakes; s++) {
        this.drawables.push(new SnowFlake());
      }
    }
  
    update() {
      super.update();
  
      for (const flake of this.drawables) {
        flake.update(this.ctx);
      }
      requestAnimationFrame(this.updateBound);
    }
  }
