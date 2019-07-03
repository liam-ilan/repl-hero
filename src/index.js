import generate from './generator';
import playNote from './player';

import Stage from './Stage';
import Sprite from './Sprite';

const stageHeight = 8;
const stageWidth = 5;
const stage = new Stage(stageWidth, stageHeight, document.getElementById('terminal'));

// indicator
const line = new Sprite(0, stage.height - 1, [[8, 8, 8, 8, 8]]);
stage.sprites.push(line);

// the chord the user will be asked to play
// empty = good
// full = bad
let chordToPlay = [];

document.addEventListener('keydown', (e) => {
  // numbers 1, 2, 3, 4, 5
  if (parseInt(e.key, 10) < 6 && parseInt(e.key, 10) > 0) {
    playNote(parseInt(e.key, 10), 3);

    // if we pressed the wrong note, push an err into the array, therfore making the chord "wrong"
    if (chordToPlay.indexOf(parseInt(e.key, 10) - 1) === -1) {
      chordToPlay.push('err');
    }

    // filter out any chord we just played from chordToPlay
    chordToPlay = chordToPlay.filter(item => ((parseInt(e.key, 10) - 1) !== item));
  }
});

function loop(beatLength = 700) {
  // initilize to random bar
  let currentBar = generate();

  let beatNum = 0; // between 0 to 3
  const notes = []; // array of note sprites

  // loop on every beat
  window.setInterval(() => {
    const succeded = chordToPlay.length === 0;

    // a chord may contain up to five notes. commonly there are none, one or two.
    const currentChord = currentBar.content[beatNum];

    // generate new bar once bar is done
    if (beatNum === 3) {
      currentBar = generate(currentBar);
      beatNum = 0;
    } else {
      beatNum += 1;
    }

    // step forward in the animation
    notes.forEach((sprite) => {
      const s = sprite;
      s.y += 1;
      return s;
    });

    // reconstruct the chords the user will need to play
    chordToPlay = notes.filter(item => (item.y === stage.height - 1)).map(item => item.x);

    // visualize
    currentChord.forEach((note) => {
      const sprite = new Sprite(note - 1, 0, [[note]]);
      stage.sprites.push(sprite);
      notes.push(sprite);
    });

    // render
    stage.render();

    // temporary: tells the user if the chord they played was good or bad
    document.getElementById('terminal').innerHTML += `\n${succeded ? 'good' : 'bad'}`;

    // filter out sprit
    stage.sprites.filter(sprite => sprite.y < stageHeight);
    notes.filter(sprite => sprite.y < stageHeight);
  }, beatLength);
}

loop();
