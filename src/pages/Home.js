import React from 'react';
import { Menu } from '../components/Menu';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return(
    <Wrapper>
      <Menu />
      <Rotate>
        <Product
          onClick={ () => navigate('/sign-in') }
          className='product'
          style={{
            top: '10%',
            left: '-10%',
            rotate: '10deg',
          }}
        >
          Aqui
        </Product>

        <Product
          onClick={ () => navigate('/sign-in') }
          className='product'
          style={{
            top: '-10%',
            left: '60%',
            rotate: '100deg',
          }}
        >
          Aqui
        </Product>
        <Product
          onClick={ () => navigate('/sign-in') }
          className='product'
          style={{
            top: '60%',
            right: '-10%',
            rotate: '190deg',
          }}
        >
          Aqui
        </Product>
        <Product
          onClick={ () => navigate('/sign-in') }
          className='product'
          style={{
            bottom: '-10%',
            right: '60%',
            rotate: '280deg',
          }}
        >
          Aqui
        </Product>
      </Rotate>

      <Slogan>
        <h1>
          Tudo o que você procura no conforto da sua casa!
        </h1>
      </Slogan>
     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,255,240,1) 35%, #b6f2b6 100%);
`;

const Product = styled.div`
  position: fixed;
  width: 440px;
  height: 440px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(30, 30, 30) 20px 20px 30px -10px;
  z-index: 1;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  12.5% {
    transform: rotate(-90deg);
  }
  25% {
    transform: rotate(-90deg);
  }
  37.5% {
    transform: rotate(-180deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  62.5% {
    transform: rotate(-270deg);
  }
  75% {
    transform: rotate(-270deg);
  }
  87.5% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Rotate = styled.div`
  position: fixed;
  left: 50%;
  width: 1400px;
  aspect-ratio: 1 / 1;
  display: inline-block;
  animation: ${rotate} 20s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  z-index: 1;
`;

const Slogan = styled.div`
  position: fixed;
  top: 20%;
  left: 10%;
  z-index: 0;
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 8vw;
  color: #90EE90;
`;
