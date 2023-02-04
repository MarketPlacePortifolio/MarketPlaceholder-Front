import styled from 'styled-components';

import Container from '../Container';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin-left: 10%;
  overflow-x: hidden;

  @media (min-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;
