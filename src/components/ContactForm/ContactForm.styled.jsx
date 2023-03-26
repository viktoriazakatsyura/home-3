import styled from '@emotion/styled';

export const Input = styled.input`
  display: flex;
  padding: 6px;
  margin-bottom: 20px;
  border-radius: 5px;
  min-width: 300px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:focus {
    border: 2px solid #eee;
    outline: none;
  }
`;
export const Button = styled.button`
  background-color: #fff;
  outline: none;
  padding: 6px 8px;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
    box-shadow: 0 0 20px rgba(50, 50, 93, 0.25);
    background: blue;
  }
`;
export const Title = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 7px;
`;
