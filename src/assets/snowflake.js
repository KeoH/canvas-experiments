const GameObject = require('../engine/gameobject');

class SnowFlake extends GameObject {
    constructor() {
      super();
      this.vx = 0;
      this.vy = 0;
      this.radius = 0;
      this.reset();
    }
  
    reset() {
      this.x = this.randBetween(0, window.innerWidth);
      this.y = this.randBetween(0, -window.innerHeight);
      this.vx = this.randBetween(-3, 3);
      this.vy = this.randBetween(2, 5);
      this.radius = this.randBetween(1, 4);
      this.alpha = this.randBetween(0.1, 0.9);
    }
  
    update(ctx) {
      super.update(ctx);
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.y + this.radius > window.innerHeight) {
        this.reset();
          }
          this.draw(ctx)
    }
  
    draw(ctx) {
      ctx.save();
      ctx.fillStyle = "#FFF";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.globalAlpha = this.alpha;
      ctx.fill();
      ctx.restore();
    }
  }

module.exports = SnowFlake;