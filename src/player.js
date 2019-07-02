/* global Synth */
import generate from './generator';

// piano, edm, acoustic, organ
const instrument = Synth.createInstrument('piano');

// play single note
function playNote(num, pitch) {
  const notes = ['C', 'D', 'F', 'G', 'A'];
  instrument.play(notes[num - 1], pitch, 2);
}

// plays multiple notes
function playChord(chord, pitch) {
  chord.forEach((item) => { playNote(item, pitch); });
}

// test generate
export default function player(beatLength = 500) {
  // initilize to random bar
  let currentBar = generate();

  // between 0 to 3
  let beatNum = 0;

  // init pitch (random)
  let pitch = Math.floor((Math.random() * 3) + 3);

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
