import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginBlock = styled.div`
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  width: 400px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-flow: column nowrap;
  a > input {
    width: 100%;
  }
  input {
    margin-bottom: 10px;
    font-size: 16px;
    min-height: 45px;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  #idText,
  #pwText {
    padding-left: 10px;
  }
  form {
    display: flex;
    flex-flow: column nowrap;
  }
  #pwText {
    margin-bottom: 30px;
  }
  input[type='button'] {
    font-weight: 500;
    cursor: pointer;
    background-color: #e8e8e8;
    border: none;
    :hover {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const Login = () => {
  return (
    <LoginBlock>
      <form>
        <label for="idText">ID</label>
        <input
          id="idText"
          type="text"
          className="idText"
          placeholder="아이디를 입력하세요."
          value=""
        />

        <label for="pwText">PW</label>
        <input
          id="pwText"
          type="password"
          className="pwText"
          placeholder="비밀번호를 입력하세요"
          value=""
        />

        <input type="button" value="로그인" />
      </form>
      <Link to="/signup">
        <input type="button" value="회원가입" />
      </Link>
    </LoginBlock>
  );
};

export default Login;
