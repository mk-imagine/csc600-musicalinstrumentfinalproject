import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import './Guitar.css';

// project imports
import { Instrument, InstrumentProps } from "../Instruments";
import Oscillators from './Oscillators';

function Guitar({ synth, setSynth }: InstrumentProps): JSX.Element {
  const playNote = (note: string, octave: number) => {
    synth?.triggerAttackRelease(`${note}${octave}`, "0.75");
  };

  return (
    <div className="pv4">
      <div id="guitar">
        <div className="neck">
          <div className="frets">
            <div className="head" />
            <div className="fret" />
            <div className="fret">
              <div className="dot" />
            </div>
            <div className="fret"/>
            <div className="fret">
              <div className="dot" />
            </div>
            <div className="fret" />
            <div className="fret">
              <div className="dot" />
            </div>
            <div className="fret" />
            <div className="fret">
              <div className="dot" />
            </div>
            <div className="fret" />
            <div className="fret" />
          </div>
          <div className="strings">
            <div className="string">
              <div className="opennote" onMouseDown={() => playNote("E", 4)} />
              <div className="note" onMouseDown={() => playNote("F", 4)} />
              <div className="note" onMouseDown={() => playNote("Gb", 4)} />
              <div className="note" onMouseDown={() => playNote("G", 4)} />
              <div className="note" onMouseDown={() => playNote("Ab", 4)} />
              <div className="note" onMouseDown={() => playNote("A", 4)} />
              <div className="note" onMouseDown={() => playNote("Bb", 4)} />
              <div className="note" onMouseDown={() => playNote("B", 4)} />
              <div className="note" onMouseDown={() => playNote("C", 5)} />
              <div className="note" onMouseDown={() => playNote("Db", 5)} />
            </div>
            <div className="string">
              <div className="opennote" onMouseDown={() => playNote("B", 3)} />
              <div className="note" onMouseDown={() => playNote("C", 4)} />
              <div className="note" onMouseDown={() => playNote("Db", 4)} />
              <div className="note" onMouseDown={() => playNote("D", 4)} />
              <div className="note" onMouseDown={() => playNote("Eb", 4)} />
              <div className="note" onMouseDown={() => playNote("E", 4)} />
              <div className="note" onMouseDown={() => playNote("F", 4)} />
              <div className="note" onMouseDown={() => playNote("Gb", 4)} />
              <div className="note" onMouseDown={() => playNote("G", 4)} />
              <div className="note" onMouseDown={() => playNote("Ab", 4)} />
            </div>
            <div className="string">
              <div className="opennote" onMouseDown={() => playNote("G", 3)} />
              <div className="note" onMouseDown={() => playNote("Ab", 3)} />
              <div className="note" onMouseDown={() => playNote("A", 3)} />
              <div className="note" onMouseDown={() => playNote("Bb", 3)} />
              <div className="note" onMouseDown={() => playNote("B", 3)} />
              <div className="note" onMouseDown={() => playNote("C", 4)} />
              <div className="note" onMouseDown={() => playNote("Db", 4)} />
              <div className="note" onMouseDown={() => playNote("D", 4)} />
              <div className="note" onMouseDown={() => playNote("Eb", 4)} />
              <div className="note" onMouseDown={() => playNote("E", 4)} />
            </div>
            <div className="string">
              <div className="opennote" onMouseDown={() => playNote("D", 3)} />
              <div className="note" onMouseDown={() => playNote("Eb", 3)} />
              <div className="note" onMouseDown={() => playNote("E", 3)} />
              <div className="note" onMouseDown={() => playNote("F", 3)} />
              <div className="note" onMouseDown={() => playNote("Gb", 3)} />
              <div className="note" onMouseDown={() => playNote("G", 3)} />
              <div className="note" onMouseDown={() => playNote("Ab", 3)} />
              <div className="note" onMouseDown={() => playNote("A", 3)} />
              <div className="note" onMouseDown={() => playNote("Bb", 3)} />
              <div className="note" onMouseDown={() => playNote("B", 3)} />
            </div>
            <div className="string">
              <div className="opennote" onMouseDown={() => playNote("A", 2)} />
              <div className="note" onMouseDown={() => playNote("Bb", 2)} />
              <div className="note" onMouseDown={() => playNote("B", 2)} />
              <div className="note" onMouseDown={() => playNote("C", 3)} />
              <div className="note" onMouseDown={() => playNote("Db", 3)} />
              <div className="note" onMouseDown={() => playNote("D", 3)} />
              <div className="note" onMouseDown={() => playNote("Eb", 3)} />
              <div className="note" onMouseDown={() => playNote("E", 3)} />
              <div className="note" onMouseDown={() => playNote("F", 3)} />
              <div className="note" onMouseDown={() => playNote("Gb", 3)} />
            </div>
            <div className="string">
              <div className="opennote" onMouseDown={() => playNote("E", 2)} />
              <div className="note" onMouseDown={() => playNote("F", 2)} />
              <div className="note" onMouseDown={() => playNote("Gb", 2)} />
              <div className="note" onMouseDown={() => playNote("G", 2)} />
              <div className="note" onMouseDown={() => playNote("Ab", 2)} />
              <div className="note" onMouseDown={() => playNote("A", 2)} />
              <div className="note" onMouseDown={() => playNote("Bb", 2)} />
              <div className="note" onMouseDown={() => playNote("B", 2)} />
              <div className="note" onMouseDown={() => playNote("C", 3)} />
              <div className="note" onMouseDown={() => playNote("Db", 3)} />
            </div>
          </div>
        </div>
      </div>
      <Oscillators 
        synth={synth}
        setSynth={setSynth}
      />
    </div>
  );
}

export const GuitarInstrument = new Instrument("Guitar", Guitar);