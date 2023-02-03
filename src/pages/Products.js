import React from 'react';
import styled from 'styled-components';
import { Carousel } from '../components/Carousel';
import { Menu } from '../components/Menu';

export function Products() {
  return (
    <Wrapper>
      <Menu />
      
      <Carousel 
        products={[ 'imagem 1', 'imagem 2' ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,255,240,1) 35%, #b6f2b6 100%);

  .carousel {
    margin-top: 82px;

    button {
      position: fixed;
      z-index: 1;
      border: none;
      background: none;
    }

    div {
      z-index: 0;
      width: 100%;
      height: 300px;
      background-color: red;
    }

    .prev {
      top: 212px;
    }

    .next {
      top: 212px;
      right: 0px;
    }
  }
`;
