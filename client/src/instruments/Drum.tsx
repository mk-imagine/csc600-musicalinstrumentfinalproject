// 3rd party library imports
import { useState } from 'react';
import { Range } from 'immutable';
import './drum.css';
import {
    RadioButton20,
    RadioButtonChecked20,
  } from '@carbon/icons-react';
// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import Oscillators from './Oscillators';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Drum.
 ** ------------------------------------------------------------------------ */

function Drum({ synth, setSynth }: InstrumentProps): JSX.Element {
    const [selectedOctave, setSelectedOctave] = useState<number>(2);
    
    return (
        <div className="pv4">
            <div className="relative dib h4 w-100 ml4 instrumentContainer"
                style={{
                    display: 'flex',
                    flexDirection : 'row'
                }}
            >
                <div className='symbalContainer'>
                    <div className='symbalMain'
                        onMouseDown={() => synth?.triggerAttack(`C${selectedOctave}`)} 
                        onMouseUp={() => synth?.triggerRelease('+0.25')} 
                    ></div>
                    <div className='symbalStick'></div>
                </div>
                <div className='floorTomContainer'>
                    <div className='floorTomTop'></div>
                    <div className='floorTomMain'
                        onMouseDown={() => synth?.triggerAttack(`D${selectedOctave}`)} 
                        onMouseUp={() => synth?.triggerRelease('+0.25')} 
                    ></div>
                    <div className='floorTomBottom'></div> 
                    <div className='floorTomStickContainer'>
                        <div className='floorTomStick'></div>
                        <div className='floorTomStick'></div>
                        <div className='floorTomStick'></div>
                    </div>
                </div>
                <div style={{marginLeft: '10px'}} className='MiddleTomContainer'>
                    <div className='MiddleTomTop'></div>
                    <div className='MiddleTomMain' 
                        onMouseDown={() => synth?.triggerAttack(`E${selectedOctave}`)} 
                        onMouseUp={() => synth?.triggerRelease('+0.25')} 
                    ></div>
                    <div className='MiddleTomStick'>
                    </div>
                </div>
                <div className='drumMain'
                    onMouseDown={() => synth?.triggerAttack(`F${selectedOctave}`)} 
                    onMouseUp={() => synth?.triggerRelease('+0.25')} >
                        DRUM
                </div>
                <div style={{marginRight: '10px'}} className='MiddleTomContainer'>
                    <div className='MiddleTomTop'></div>
                    <div className='MiddleTomMain' 
                        onMouseDown={() => synth?.triggerAttack(`G${selectedOctave}`)} 
                        onMouseUp={() => synth?.triggerRelease('+0.25')} 
                    ></div>
                    <div className='MiddleTomStick'>
                    </div>
                </div>
                <div className='floorTomContainer'>
                    <div className='floorTomTop'></div>
                    <div className='floorTomMain'
                        onMouseDown={() => synth?.triggerAttack(`A${selectedOctave}`)} 
                        onMouseUp={() => synth?.triggerRelease('+0.25')} 
                    ></div>
                    <div className='floorTomBottom'></div> 
                    <div className='floorTomStickContainer'>
                        <div className='floorTomStick'></div>
                        <div className='floorTomStick'></div>
                        <div className='floorTomStick'></div>
                    </div>
                </div>
                <div className='symbalContainer'>
                    <div className='symbalMain'
                        onMouseDown={() => synth?.triggerAttack(`B${selectedOctave}`)} 
                        onMouseUp={() => synth?.triggerRelease('+0.25')}
                    ></div>
                    <div className='symbalStick'></div>
                </div>
                <div className='octaveContainer'>
                    <div><b>OCTAVE</b></div>
                    <div>
                    {
                    Range(2, 7).map((octave: number) => {
                        return(
                            <div className='radioContainer'
                                onClick={() => setSelectedOctave(octave)}
                            >
                                {selectedOctave ===  octave? (
                                <RadioButtonChecked20 className="mr1" />
                                ) : (
                                <RadioButton20 className="mr1" />
                                )}
                                <div className="dim">
                                    {octave}
                                </div>
                            </div>
                        )
                    })
                    }
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

export const DrumInstrument = new Instrument('Drum', Drum);