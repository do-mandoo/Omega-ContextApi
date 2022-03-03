import React from 'react';
import styled from 'styled-components';
import LoginForm from '../containers/auth/LoginForm';

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
      <LoginForm />
    </LoginPageBlock>
  );
};

export default LoginPage;
