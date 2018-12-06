class GameObject {
  constructor(x = 0, y = 0, z=0, alpha = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.alpha = alpha;
  }
  update(ctx) {}

  randBetween(min, max) {
    return min + Math.random() * (max - min);
  }
}

module.exports = GameObject;