import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCutLemon } from 'react-icons/gi';
import { animated, useSpring } from '@react-spring/web';
import { Bar } from './Bar';

export default function Logo({ size = 'small' }) {
  const [ hovered, setHovered ] = useState(false);
  const { scale } = useSpring({ 
    scale: hovered ? 1.2 : 1,
  });

  return (
    <LogoStyle
      as={animated.div}
      onPointerOver = { () => setHovered(true) }
      onPointerOut = { () => setHovered(false) }
      style={{
        transform: scale.to(s => `scale(${s})`),
      }}
      size={size}
    >
      <h1>
        Market Place
      </h1>
      <GiCutLemon size={ 40 } onClick={ () => navigate('/') }/>
      <Bar hovered={ hovered } widthMax={ '210px' } />
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  font-family: 'Kaushan Script', cursive;
  display: flex;
  align-items: center;
  justify-content: center; 
  
  h1 {
    margin-top: 6px;
  }

  * {
    margin-left: 10px;
  }
`;
