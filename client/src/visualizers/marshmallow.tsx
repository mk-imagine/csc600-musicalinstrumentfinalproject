import P5 from 'p5';
import * as Tone from 'tone';
import { Visualizer } from '../Visualizers';


export const marshmallowVisualizer = new Visualizer(
  'marshmallow',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);


    const values = analyzer.getValue();
    
    p5.background(0, 0, 0, 255);
    
    p5.noStroke();  
    //p5.fill 
    p5.beginShape();
 

    for (let i = 0; i < 3600; i++) {
      const amplitude = values[i] as number;
      p5.stroke(1000);
      let r = p5.map(values[i] as number, 0, 1, 100, 1000);
      const rgb1 = Math.cos(i) * 265;
      const rgb2 = Math.sin(i) * 265;
      const rgb3 = i;
      p5.fill(rgb1, rgb2, rgb3);
      let x = r * Math.cos(i);
      let y = r * Math.sin(i);
      p5.vertex( x + width/2 - 100, y + height/2);
    }
    p5.endShape();
  },
);
