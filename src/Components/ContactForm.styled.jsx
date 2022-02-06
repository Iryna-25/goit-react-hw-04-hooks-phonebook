import styled from 'styled-components';
export const Header = styled.h1`
  font-style: Arial;
  font-size: 30px;
`;

export const Form = styled.form`
  padding: 20px 20px;
  margin-bottom: 50px;
  label {
    display: block;
    margin-bottom: 20px;
    font-style: Arial;
  }
`;

export const Input = styled.input`
  border: 2px solid #000;
  background-color: #FAEBD7;
  border-radius: 7px;
  width: 50%;
  height: 25px;
  display: block;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Button = styled.button`
  border: 1px solid #000;
  border-radius: 7px;
  padding: 7px;
  background-color: #4B0082;
  color: #fff;
  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #663399;
    cursor: pointer;
  }
`;