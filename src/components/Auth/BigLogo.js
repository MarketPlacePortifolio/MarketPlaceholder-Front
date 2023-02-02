import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { GiCutLemon } from 'react-icons/gi';
import { animated, useSpring } from '@react-spring/web';

export default function BigLogo() {
  const [ hovered, setHovered ] = useState(false);
  const cardRef = useRef();

  const [{ xys }, api] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        precision: 0.01,
        clamp: false,
        velocity: 0,
      }
    }),
    []
  );

  const handleMouseLeave = () => {
    api.start({
      xys: [0, 0, 1]
    });
    setHovered(false);
  };
  
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    api.start({
      xys: calc(e.clientX, e.clientY, rect)
    });
    setHovered(true);
  };

  return (
    <LogoStyle
      as={animated.div}
      style={{ transform: xys.to(trans) }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={ cardRef }
    >
      <h1>
        Market Place
      </h1>
      <GiCutLemon size={ 80 } onClick={ () => navigate('/') }/>
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  font-family: 'Kaushan Script', cursive;
  display: flex;
  font-size: 48px;
  align-items: center;
  justify-content: center;
  color: #90EE90;
  width: 8ch;
  height: 8ch;
  will-change: transform;
  
  h1 {
    width: 150px;
    margin-top: 6px;
  }

  * {
    margin-left: 2px;
  }
`;

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
