import { Scene } from "./engine/scene";
import { Snow } from "./scenes/snow";
import { Blood } from "./scenes/blood";
import { GameManager } from "./engine/gameManager";

const levels: Scene[] = [new Snow(), new Blood()];


/*
*   Level 1: Snow
*   Level 2: Blood
*
*/
const startAtLevel = 1;

const gameManager = new GameManager(levels, startAtLevel - 1);
