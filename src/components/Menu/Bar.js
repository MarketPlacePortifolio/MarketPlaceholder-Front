import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import styled from 'styled-components';

export function Bar({ widthMax, hovered }) {
  const { scale, color, width } = useSpring({ 
    scale: hovered ? 1.2 : 1,
    width: !hovered ? '0px' : widthMax,
  });

  return(
    <animated.div 
      style={{
        position: 'fixed',
        bottom: '-10px',
        width: width,
        height: '2px',
        background: '#90EE90',
        borderRadius: '50px',
      }}
    />
  );
}
