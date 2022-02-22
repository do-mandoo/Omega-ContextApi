import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPageBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterPage = () => {
  return (
    <RegisterPageBlock>
      <RegisterForm />
    </RegisterPageBlock>
  );
};

export default RegisterPage;
