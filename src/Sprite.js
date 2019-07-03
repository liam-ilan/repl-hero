export default class Sprite {
  constructor(x = 0, y = 0, costume = null) {
    this.costume = costume || new Array(1).fill(null).map(() => new Array(1).fill(1));
    this.x = x;
    this.y = y;
  }
}
