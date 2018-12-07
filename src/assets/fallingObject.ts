import { GameObject } from "../engine/gameObject";

export class FallingObject extends GameObject {
  vx: number;
  vy: number;
  radius: number;
  color: string;

  constructor() {
    super();
    this.vx = 0;
    this.vy = 1;
    this.radius = 1;
    this.color = "#FFF";
  }

  randBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  reset() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 1;
    this.radius = 1;
    this.alpha = 1;
  }

  update(ctx: CanvasRenderingContext2D) {
    super.update(ctx);
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.radius > window.innerHeight) {
      this.reset();
    }
    this.draw(ctx);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.restore();
  }
}
