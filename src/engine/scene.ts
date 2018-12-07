import { GameObject } from "./gameObject";
import { GameManager } from './gameManager';

export class Scene {
  drawables: GameObject[];
  updateBound: any;
  gameManager: GameManager;
  private running: boolean = false;

  constructor() {
    this.drawables = [];
    this.updateBound = this.update.bind(this);
  }

  start(){
    this.running = true;
    requestAnimationFrame(this.updateBound);
  }

  stop(){
    this.running = false;
  }

  sortDrawables() {
    this.drawables = this.drawables.sort((a: GameObject, b: GameObject) => {
      if (a.z > b.z) {
        return 1;
      }
      if (a.z < b.z) {
        return -1;
      }
      return 0;
    });
  }

  update() {
    this.sortDrawables();
    this.gameManager.ctx.clearRect(0, 0, this.gameManager.width, this.gameManager.height);
  }
}
