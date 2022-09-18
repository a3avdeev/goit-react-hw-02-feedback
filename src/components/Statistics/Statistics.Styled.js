import styled from 'styled-components';

export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
  padding: 0;

  & li {
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 1.3em;
  }
`;
