import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 40px;
  align-items: center;

  div.title {
    flex-grow: 1;
    margin-left: 20px;
    font-size: 0.6em;
  }

  h1 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
  }

  svg {
    width: 80px;
    overflow: visible;
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;
