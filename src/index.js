import generate from './generator';
import playChord from './player';

import Stage from './Stage';
import Sprite from './Sprite';

const stageHeight = 8;
const stageWidth = 5;
const stage = new Stage(stageWidth, stageHeight);

function loop(beatLength = 1000) {
  // initilize to random bar
  let currentBar = generate();
  let beatNum = 0; // between 0 to 3
  let pitch = Math.floor((Math.random() * 3) + 3); // random pitch

  // loop on every beat
  window.setInterval(() => {
    // a chord may contain up to five notes. commonly there are none, one or two.
    const currentChord = currentBar.content[beatNum];

    // play chord
    playChord(currentChord, pitch);

    // generate new bar once bar is done
    if (beatNum === 3) {
      currentBar = generate(currentBar);
      pitch = Math.floor((Math.random() * 3) + 3);
      beatNum = 0;
    } else {
      beatNum += 1;
    }

    // visualize
    currentChord.forEach((chord) => {
      stage.sprites.push(new Sprite(chord - 1, 0, [[chord]]));
    });

    stage.render(); // NOTE: this currently clears the console.

    // step forward in the animation and clean up the sprites
    stage.sprites = stage.sprites.map((sprite) => {
      const s = sprite;
      s.y += 1;
      return s;
    }).filter(sprite => sprite.y < stageHeight);

  }, beatLength);
}

loop();
