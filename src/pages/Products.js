import React from 'react';
import styled from 'styled-components';
import { Carousel } from '../components/Carousel';
import { Menu } from '../components/Menu';

export function Products() {
  return (
    <Wrapper>
      <Menu />

      <Carousel 
        products={[ 
          { name: 'imagem 1', price: 2000, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/2_2b8c973f-c165-472e-aa5e-46b469c48270.jpg?v=1672238827', promotion: '0.5' }, 
          { name: 'imagem 2', price: 2099, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/2_2b8c973f-c165-472e-aa5e-46b469c48270.jpg?v=1672238827', promotion: '0.2' }, 
          { name: 'imagem 3', price: 1599, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/2_2b8c973f-c165-472e-aa5e-46b469c48270.jpg?v=1672238827', promotion: '0.1' }, 
          { name: 'imagem 4', price: 1099, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/2_2b8c973f-c165-472e-aa5e-46b469c48270.jpg?v=1672238827', promotion: '0.1' },
        ]}
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
`;
