import React, { useEffect } from 'react';
import Granim from 'granim';

const Background = () => {
  useEffect(() => {
    new Granim({
      element: '#canvas-basic',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ['#B4B4B4', '#89B8CA', '#008080','#0000FF'],
            ['#909090', '#808080', '#0000FF','#008080'],
          ]
        }
      }
    });
  }, []);

  return <canvas id="canvas-basic"></canvas>;
};

export default Background;
