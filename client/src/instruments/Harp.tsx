// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { is, List, Range } from 'immutable';


// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import Oscillators from './Oscillators';


/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Harp.
 ** ------------------------------------------------------------------------ */
 interface HarpStringsProps {
    note: string; // C, D, E, F, G, A, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    isC?: boolean;
    isF?: boolean;
    octave: number;
    index: number; 
    distanceLeft: number; 
    top: number;
  }

export function HarpStrings({
    note, 
    synth, 
    index, 
    isC,
    isF,
    distanceLeft,
    top
}: HarpStringsProps): JSX.Element {
  return (
      <div
        onMouseDown={() => synth?.triggerAttack(`${note}`, '+0.35')} 
        onMouseUp={() => synth?.triggerRelease('+1')}
        className={classNames('ba pointer absolute dim',{
            'C': isC && !isF, // C is red
            'F': isF && !isC, // F is blue
            'others': !isC && !isF
          })}
        style={{
          top: 0,
          left: `${distanceLeft + index - 16}rem`,
          zIndex: 0,
          marginTop: top*2*2-30,
          marginLeft:  '0.8rem',
          background: isC ? '#880808' : ( isF ? '#0000FF' : '#000000'),
          height: `${35 - top}rem`,
          width: ".5rem",
          borderRadius: ".1rem"
        }}>
      </div>
  );
}


function Harp({synth, setSynth}: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);
  
  return (
    <div className="pv4">
        <div>
       <Oscillators 
                synth={synth}
                setSynth={setSynth}
            /></div>
    
      <div className="relative dib h4 w-100 ml4">
         {Range(2, 7).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`; 
            const isC = key.note.indexOf('C') === 0;
            const isF = key.note.indexOf('F') === 0;
            return (
              <HarpStrings
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                isC={isC}
                isF={isF}
                index={(octave)*8 + key.idx }
                top={(octave * 8 + key.idx)*0.8 * 0.8}
                distanceLeft={0}
              />
            );
          }),
        )}
      </div>
        
      
      
    </div>
  );
}

export const HarpInstrument = new Instrument('Harp', Harp);
