import { GameObject } from "./gameobject";

export class Scene {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  drawables: GameObject[];
  updateBound: any;
  width: number;
  height: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawables = [];

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", () => this.onResize());
    this.onResize();
    this.updateBound = this.update.bind(this);
    requestAnimationFrame(this.updateBound);
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

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  update() {
    this.sortDrawables();
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
