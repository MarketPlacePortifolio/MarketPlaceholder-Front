import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCutLemon } from 'react-icons/gi';
import { animated, useSpring } from '@react-spring/web';
import { Bar } from './Bar';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();
  const [ hovered, setHovered ] = useState(false);
  const { scale } = useSpring({ 
    scale: hovered ? 1.2 : 1,
  });

  return (
    <LogoStyle
      as={animated.div}
      onPointerOver = { () => setHovered(true) }
      onPointerOut = { () => setHovered(false) }
      onClick={ () => navigate('/products') }
      style={{
        transform: scale.to(s => `scale(${s})`),
      }}
    >
      <h1>
        Market Placeholder
      </h1>
      <GiCutLemon size={ 45 }/>
      <Bar hovered={ hovered } widthMax={ '180px' } />
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  font-family: 'Kaushan Script', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90EE90;
  
  h1 {
    width: 130px;
    margin-bottom: 8px;
    font-size: 24px;
  }

  * {
    margin-bottom: 6px;
    margin-left: -4px;
  }
`;
