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
            ['#ff9966', '#ff5e62'],
            ['#00F260', '#0575E6'],
            ['#e1eec3', '#f05053']
          ]
        }
      }
    });
  }, []);

  return <canvas id="canvas-basic"></canvas>;
};

export default Background;
