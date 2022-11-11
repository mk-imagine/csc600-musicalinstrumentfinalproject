// 3rd party library imports
import P5 from 'p5';
import { listenerCount } from 'process';
import * as Tone from 'tone';
import { Analyser } from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const barGraphVisualizer = new Visualizer (
    'BarGraph',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;

        const values = analyzer.getValue();

        console.log("width: " + width);
        console.log("height: " + height);
        const color1 = Math.floor(Math.random() * 265);
        const color2 = Math.floor(Math.random() * 265);
        const color3 = Math.floor(Math.random() * 265);
        
        p5.background(0, 0, 0, 255);
        p5.stroke(color1, color2, color3);
        // p5.stroke(255, 255, 255, 255);
        p5.beginShape();

        for (let i = 0; i < values.length; i++) {
            const amplitude = values[i] as number;
            // const space_between_lines = width / 128;
            const space_between_lines = 12;
            // console.log("amplitude: " + amplitude);
            // console.log("space between lines: " + space_between_lines);
            p5.stroke(color1, color2, color3);
            // p5.fill(i, 255, 255);
            // const y = p5.map(amplitude, 0, 256, height, 0);
            console.log(p5.map(amplitude, -1, 1, 0, height));
            const y = height / 2 + amplitude * height;
            // console.log("test:" + y);
            // console.log("height: " + height);
            p5.rect(i * space_between_lines, y, space_between_lines, height - y);
            // p5.line(i * space_between_lines, height, i * space_between_lines, y);
        }
        p5.endShape();
    },
);
