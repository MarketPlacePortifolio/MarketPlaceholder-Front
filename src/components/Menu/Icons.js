import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import { Bar } from './Bar';

export function Icons({ children }) {
  const [ hovered, setHovered ] = useState(false);
  const { scale, color } = useSpring({ 
    scale: hovered ? 1.2 : 1,
  });

  return(
    <>
      <animated.button
        onPointerOver = { () => setHovered(true) }
        onPointerOut = { () => setHovered(false) }
        style={{
          color: '#90EE90',
          transform: scale.to(s => `scale(${s})`),
        }}
      >
        { children }
        <Bar hovered={ hovered } widthMax={ '50px' } />
      </animated.button>      
    </>
  );
}
