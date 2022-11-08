import P5 from 'p5';
import * as Tone from 'tone';
import { Visualizer } from '../Visualizers';

export const Jiji14Visualizer = new Visualizer(
  'Jiji14',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    const values = analyzer.getValue();
    const rgb1 = Math.floor(Math.random() * 265);
    const rgb2 = Math.floor(Math.random() * 265);
    const rgb3 = Math.floor(Math.random() * 265);
    p5.background(0, 0, 0, 255);
    p5.fill(rgb1, rgb2, rgb3);
    p5.noStroke();   
    p5.beginShape();
    
    for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const x = width / 3;
        const y = height / 2;
        p5.ellipse(x, y, amplitude * 1000);
    }
    p5.endShape();
  },
);
