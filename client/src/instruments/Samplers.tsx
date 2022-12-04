import { List } from 'immutable';
import * as Tone from 'tone';
import classNames from 'classnames';

/** ------------------------------------------------------------------------ **
 * Seperate Oscillators Part from Piano Components
 * (This component will be used for every Instrument component)
 * sine | sawtooth | square | triangle | fmsine' ....
 ** ------------------------------------------------------------------------ */

interface OscillatorsProps {
    synth: Tone.Synth;
    setSynth: (f: (oldSynth: Tone.Synth) => Tone.Synth) => void;
}

function OscillatorType({ title, onClick, active }: any): JSX.Element {
    return (
      <div
        onClick={onClick}
        className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
          'b--black black': active,
          'gray b--light-gray': !active,
        })}
      >
        {title}
      </div>
    );
  }

  
function Oscillators({ synth, setSynth }: OscillatorsProps):JSX.Element {
    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
          oldSynth.disconnect();
    
          return new Tone.Synth({
            oscillator: { type: newType } as Tone.OmniOscillatorOptions,
          }).toDestination();
        });
      };
    
      const oscillators: List<OscillatorType> = List([
        'sine',
        'sawtooth',
        'square',
        'triangle',
        'fmsine',
        'fmsawtooth',
        'fmtriangle',
        'amsine',
        'amsawtooth',
        'amtriangle',
      ]) as List<OscillatorType>;

    return (
        <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <OscillatorType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    )
}

export default Oscillators;