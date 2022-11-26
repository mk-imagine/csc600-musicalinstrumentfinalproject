import P5 from 'p5';
import * as Tone from 'tone';
import { Visualizer } from '../Visualizers';

const CORDINATES = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5];

export const Jiji14Visualizer = new Visualizer(
  'Jiji14',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();

    // random colors
    const rgb1 = Math.floor(Math.random() * 265);
    const rgb2 = Math.floor(Math.random() * 265);
    const rgb3 = Math.floor(Math.random() * 265);
    
    // random cordinates
    const xCordinate = Math.floor(Math.random() * 14);
    const yCordinate = Math.floor(Math.random() * 14);

    p5.background(0, 0, 0, 255);
    p5.fill(rgb1, rgb2, rgb3);
    p5.noStroke();   
    p5.beginShape();

    for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        const x = width / 3 * 1.5 * CORDINATES[xCordinate];
        const y = height / 2 * 1.5 * CORDINATES[yCordinate];
        p5.ellipse(x, y, amplitude * 1000);
    }

    p5.endShape();
  },
);
