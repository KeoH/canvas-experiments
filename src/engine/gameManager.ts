import { Scene } from "./scene";

export class GameManager {
  levels: Scene[];
  actualLevel: Scene;
  levelNumber: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(levels: Scene[], startLevel: number = 0) {
    this.levels = levels;
    this.levelNumber = startLevel;
    for (let level of this.levels) {
      level.gameManager = this;
    }
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    window.addEventListener("resize", () => this.onResize());
    this.onResize();

    this.startGame();
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  startGame() {
    this.actualLevel = this.levels[this.levelNumber];
    this.startLevel();
  }

  startLevel() {
    this.actualLevel = this.levels[this.levelNumber];
    this.actualLevel.start();
  }

  startNextLevel() {
    this.actualLevel.stop();
    if (this.levels[this.levelNumber + 1] != undefined) {
      this.levelNumber += 1;
      this.startLevel();
    }
  }
}
