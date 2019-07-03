/* global Synth */

// piano, edm, acoustic, organ
const instrument = Synth.createInstrument('piano');

// play single note
export default function playNote(num, pitch) {
  const notes = ['C', 'D', 'F', 'G', 'A'];
  instrument.play(notes[num - 1], pitch, 2);
}

// plays multiple notes
export function playChord(chord, pitch) {
  chord.forEach((item) => { playNote(item, pitch); });
}
