import styled from 'styled-components';
import opacity from './Animation';

const LoginForm = styled.form`
  display: block;
  border: 2px solid #3A374C;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  animation: ${opacity} 1s;
`;

const Welcome = styled.div`
  padding: 5px;
  color: #483D8B;
`;

const Input = styled.input`
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding: 15px 30px;
  color: #766AD0;
  border: 1px solid #3A374C;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  transition: .3s linear;
  background: black;
`;

const FlexBox = styled.div`
  padding: 5px;
`;

export {LoginForm, Welcome, Input, FlexBox}
