import styled from 'styled-components';

export const ButtonStyles = styled.button`
  text-align: center;
  background: grey;
  width: 100px;
  height: 50px;
  margin-right: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;


    &:hover {
        background-color: blue;
        color: #ffffff;

`;
export const ButtonWrapper = styled.div`
  padding: 10px;
`;
