import React from 'react';
import styled from 'styled-components';
import Login from '../components/Login/Login';

const LoginPageBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <LoginPageBlock>
      <Login />
    </LoginPageBlock>
  );
};

export default LoginPage;
