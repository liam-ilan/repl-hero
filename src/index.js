import generate from './generator';
import playNote from './player';

import Stage from './Stage';
import Sprite from './Sprite';

const stageHeight = 10;
const stageWidth = 5;
const stage = new Stage(stageWidth, stageHeight, document.getElementById('terminal'));


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

function showTitle() {
  stage.sprites = [];

  const titleCostume = new Array(stageHeight).fill(0).map(() => new Array(stageWidth).fill(0));
  titleCostume[4] = ['R', 'E', 'P', 'L', 0];
  titleCostume[5] = [0, 'H', 'E', 'R', 'O'];

  const title = new Sprite(0, 0, titleCostume);

  stage.sprites.push(title);

  stage.render();
}

function gameOver(score) {
  stage.sprites = [];

  const endScreenCostume = new Array(stageHeight).fill(0).map(() => new Array(stageWidth).fill(0));
  endScreenCostume[0] = 'GAME '.split('');
  endScreenCostume[1] = ' OVER'.split('');
  endScreenCostume[4] = 'SCORE'.split('');
  endScreenCostume[5] = score.toString(10).padStart(5, '0').split('');

  const endScreen = new Sprite(0, 0, endScreenCostume);

  stage.sprites.push(endScreen);

  stage.render();
}

function gameLoop(beatLength = 700) {
  /* init */
  // initilize to random bar
  let currentBar = generate();

  let beatNum = 0; // between 0 to 3
  let notes = []; // array of note sprites

  stage.sprites = [];
  chordToPlay = [];

  let lives = 5;
  let score = 0;

  // indicator at bottom of screen
  const indicator = new Sprite(0, stage.height - 2, [[7, 7, 7, 7, 7]]);
  stage.sprites.push(indicator);

  // live counter
  const liveCounter = new Sprite(0, stage.height - 1, [['o', 'o', 'o', 'o', 'o']]);
  stage.sprites.push(liveCounter);

  // scoreCounter
  const scoreCounter = new Sprite(0, 0, [['0', '0', '0', '0', '0']]);
  stage.sprites.push(scoreCounter);

  // loop on every beat
  const interval = window.setInterval(() => {
    // record if the last beat was succesfull
    const succeded = chordToPlay.length === 0;

    if (succeded === false) { lives -= 1; } else { score += 1; }

    // render lives
    liveCounter.costume[0] = liveCounter.costume[0].map((item, i) => (i < lives ? 'o' : 'x'));

    // render score
    scoreCounter.costume[0] = score.toString(10).padStart(5, '0').split('');

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
    chordToPlay = notes.filter(item => (item.y === stage.height - 2)).map(item => item.x);

    // visualize
    currentChord.forEach((note) => {
      const sprite = new Sprite(note - 1, 1, [[note]]);
      sprite.type = 'note';
      stage.sprites.push(sprite);
      notes.push(sprite);
    });

    // filter out note sprites that fell out of screen
    stage.sprites = stage.sprites.filter(sprite => !(sprite.type === 'note' && sprite.y > stageHeight - 2));
    notes = stage.sprites.filter(sprite => sprite.type === 'note');

    stage.render();

    // if we died
    if (lives === 0) {
      clearInterval(interval);
      gameOver(score);
      setTimeout(() => {
        showTitle();
        setTimeout(gameLoop, 2000);
      }, 2000);
    }
  }, beatLength);
}

function start() {
  showTitle();
  setTimeout(gameLoop, 2000);
}

start();
