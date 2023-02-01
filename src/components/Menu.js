import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillCartFill } from 'react-icons/bs';
import { Icons } from './Icons';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export function Menu() {
  const navigate = useNavigate();
  const [ hovered, setHovered ] = useState(false);
  const { scale } = useSpring({ 
    scale: hovered ? 1.2 : 1,
  });

  return (
    <MenuBar>
      <Logo />
      
      <div className='options' >
        <Icons>
          <BsFillCartFill size={ 30 } />
        </Icons>
        
        <div className='bar' />

        <animated.button
          className='login'
          onPointerOver = { () => setHovered(true) }
          onPointerOut = { () => setHovered(false) }
          style={{
            transform: scale.to(s => `scale(${s})`),
          }}
          onClick={ () => navigate('/sign-in') }
        >
          Login
        </animated.button>
      </div>
    </MenuBar>
  );
}

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  color: #90EE90;
  font-weight: 400;
  font-size: 30px;
  /* background-color: white;
  box-shadow: white 2px 2px 1px, white 2px 4px 2px, white 2px 8px 4px; */

  a {
    color: #90EE90;
    text-decoration: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    font-size: 25px;
  }

  .login {
    height: 30px;
    padding: 0 30px;
    border-radius: 50px;
    font-size: 20px;
    background-color: #90EE90;
    color: white;
  }

  .bar {
    width: 3px;
    height: 30px;
    background-color: #90EE90;
    border-radius: 50px;
  }

  .options {
    display: flex;

    * {
      margin: 0 10px;
    }
  }
`;
