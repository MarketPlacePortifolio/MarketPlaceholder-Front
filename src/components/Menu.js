import { animated, useSpring } from '@react-spring/web';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { Icons } from './Menu/Icons';
import { useNavigate } from 'react-router-dom';
import Logo from './Menu/Logo';
import UserContext from '../contexts/UserContext';

export function Menu({ type, colored }) {
  const navigate = useNavigate();
  const [ hovered, setHovered ] = useState(false);
  const { scale } = useSpring({ 
    scale: hovered ? 1.2 : 1,
  });

  const { userData: userData } = useContext(UserContext);

  return (
    <MenuBar colored={ colored } >
      <Logo />
      
      <div className='options' >
        <Icons>
          <BsFillCartFill size={ 40 } />
        </Icons>
        
        {type !== 'profile' ? <>
          <div className='bar' />
          {!userData ? 
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
            </animated.button> : 
            !userData.image ? 
              <Icons>
                <FaUserCircle size={ 40 } onClick={ () => navigate('/profile')} />
              </Icons> : 
              <Icons
                onClick={ () => navigate('/profile')}
              >
                <img src={userData.image} alt='profilephoto' 
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </Icons>
          }
        </> : '' }
      </div>
    </MenuBar>
  );
}

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 80%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  color: #90EE90;
  font-weight: 400;
  font-size: 30px;
  background-color: ${props => props.colored ? 'white' : 'none'};
  /* box-shadow: white 2px 2px 1px, white 2px 4px 2px, white 2px 8px 4px; */

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
    height: 40px;
    background-color: #90EE90;
    border-radius: 50px;
    margin-top: 10px;
  }

  .options {
    display: flex;

    * {
      margin: 0 10px;
    }
  }
`;
