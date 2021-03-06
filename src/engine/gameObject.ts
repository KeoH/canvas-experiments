export class GameObject {
  x: number;
  y: number;
  z: number;
  alpha: number;

  constructor(x: number = 0, y: number = 0, z: number = 0, alpha: number = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.alpha = alpha;
  }
  update(ctx: CanvasRenderingContext2D) {}
}
