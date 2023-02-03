import React from 'react';
import styled from 'styled-components';
import { Menu } from '../components/Menu';

export function Profile() {
  return (
    <Wrapper>
      <Menu type={'profile'}/>
      Profile
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
