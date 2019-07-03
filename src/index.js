
import generate from './generator';
import playChord from './player'

function loop(beatLength = 500) {
  // initilize to random bar
  let currentBar = generate();
  let beatNum = 0;   // between 0 to 3
  let pitch = Math.floor((Math.random() * 3) + 3);   // random pitch

  // loop on every beat
  window.setInterval(() => {
    // play chord
    playChord(currentBar.content[beatNum], pitch);

    // generate new bar once bar
    if (beatNum === 3) {
      currentBar = generate(currentBar);
      pitch = Math.floor((Math.random() * 3) + 3);
      beatNum = 0;
    } else {
      beatNum += 1;
    }
  }, beatLength);
}

loop();
