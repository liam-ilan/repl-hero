/* global Synth */

// piano, edm, acoustic, organ
const instrument = Synth.createInstrument('piano');

// play single note
function playNote(num, pitch) {
  const notes = ['C', 'D', 'F', 'G', 'A'];
  instrument.play(notes[num - 1], pitch, 2);
}

// plays multiple notes
export default function playChord(chord, pitch) {
  chord.forEach((item) => { playNote(item, pitch); });
}
