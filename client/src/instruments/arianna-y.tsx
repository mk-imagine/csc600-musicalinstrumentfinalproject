// Xylophone by Arianna Yuan

// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { is, List, Range } from 'immutable';
import {useEffect, useState} from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import Oscillators from './Oscillators';
import { Play16 } from '@carbon/icons-react';
import { sign } from 'crypto';
import './arianna-y.css';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Xylophone.
 ** ------------------------------------------------------------------------ */

function Xylophone({ synth, setSynth }: InstrumentProps): JSX.Element {
    const sampler = new Tone.Sampler({
        urls: {
            A3: "A1.mp3",
            A4: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/"
    }).toDestination();

    const playNote = (note: string, octave: number) => {
        sampler.triggerAttackRelease(`${note}${octave}`, 8);
    };

    return (
        <div className="pv4">
            <div id="Xylophone">
                <div className="container">
                    <div className="note note-do1" id="0" onMouseDown={() => playNote("C", 4)}>
                        <div className="screw1 screw1-do1"></div>
                        <div className="screw2 screw2-do1"></div>
                    </div>
                    <div className="note note-re" id="1" onMouseDown={() => playNote("D", 4)}>
                        <div className="screw1 screw1-re"></div>
                        <div className="screw2 screw2-re"></div>
                    </div>
                    <div className="note note-mi" id="2" onMouseDown={() => playNote("E", 4)}>
                        <div className="screw1 screw1-mi"></div>
                        <div className="screw2 screw2-mi"></div>
                    </div>
                    <div className="note note-fa" id="3" onMouseDown={() => playNote("F", 4)}>
                        <div className="screw1 screw1-fa"></div>
                        <div className="screw2 screw2-fa"></div>
                    </div>
                    <div className="note note-sol" id="4" onMouseDown={() => playNote("G", 4)}>
                        <div className="screw1 screw1-sol"></div>
                        <div className="screw2 screw2-sol"></div>
                    </div>
                    <div className="note note-la" id="5" onMouseDown={() => playNote("A", 4)}>
                        <div className="screw1 screw1-la"></div>
                        <div className="screw2 screw2-la"></div>
                    </div>
                    <div className="note note-si" id="6" onMouseDown={() => playNote("B", 4)}>
                        <div className="screw1 screw1-si"></div>
                        <div className="screw2 screw2-si"></div>
                    </div>
                    <div className="note note-do2" id="7" onMouseDown={() => playNote("C", 5)}>
                        <div className="screw1 screw1-do2"></div>
                        <div className="screw2 screw2-do2"></div>
                    </div>
                </div>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/1-DO.mp3" className="note-do1"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/2-RE.mp3" className="note-re"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/3-MI.mp3" className="note-mi"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/4-FA.mp3" className="note-fa"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/5-SOL.mp3" className="note-sol"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/6-LA.mp3" className="note-la"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/7-SI.mp3" className="note-si"></audio>
                <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/8-DO.mp3" className="note-do2"></audio>
            </div>
        </div>
    );
}

export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);