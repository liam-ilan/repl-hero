export default class Stage {
  constructor(width = 64, height = 48, target) {
    this.target = target;
    this.screen = this.clearScreen();
    this.sprites = [];
    this.width = width;
    this.height = height;
  }

  clearScreen() {
    this.screen = new Array(this.height).fill(null).map(() => new Array(this.width).fill(0));
    console.clear(); // temp
    this.target.innerHTML = '';
  }

  render() {
    this.clearScreen();

    this.sprites.forEach((sprite) => {
      // scan the sprite row by row and copy it to the screen (if not out of bounds)
      sprite.costume.forEach((spriteRow, spriteRowIndex) => {
        if (
          sprite.y + spriteRowIndex < this.screen.length
          || sprite.y + spriteRowIndex >= 0
        ) {
          spriteRow.forEach((item, itemIndex) => {
            if (
              sprite.x + itemIndex < this.screen[0].length
              || sprite.x + itemIndex >= 0
            ) {
              this.screen[sprite.y + spriteRowIndex][sprite.x + itemIndex] = item;
            }
          });
        }
      });
    });

    this.target.innerHTML = this.screen.reduce(
      (out, line) => (
        `${out + line.map(item => `<span class="color${item}">█</span>`).join('')
        }\n`
      ),
      '\n',
    );

    console.log(this.screen.reduce((out, line) => (`${out + line.join('')}\n`), '\n'));
  }
}
