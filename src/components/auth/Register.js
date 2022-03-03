import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterBlock = styled.div`
  .a11y {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip-path: polygon(0 0, 0 0, 0 0);
    clip: rect(0 0 0 0);
    clip: rect(0, 0, 0, 0);
  }
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  form {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const Register = ({
  // onChangeUsername,
  // onChangeNick,
  // onChangePassword,
  // onChangeConfirmPassword,
  position,
  form,
  onChange,
  onSubmit,
  error
}) => {
  return (
    <RegisterBlock>
      <h3 className="a11y">회원가입</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="">ID</label>
        <input
          type="text"
          name="username"
          id="idText"
          placeholder="아이디를 입력하세요."
          autoComplete="off"
          // onChange={onChangeUsername}
          onChange={onChange}
        />
        <label htmlFor="">NICKNAME</label>
        <input
          type="text"
          name="nickname"
          id="nickText"
          placeholder="사용할 닉네임을 입력하세요."
          autoComplete="off"
          // onChange={onChangeNick}
          onChange={onChange}
        />
        <label htmlFor="">PASSWORD</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호를 입력하세요."
          // onChange={onChangePassword}
          onChange={onChange}
        />
        <label htmlFor="">CONFIRM PASSWORD</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPW"
          placeholder="비밀번호를 다시 입력하세요."
          // onChange={onChangeConfirmPassword}
          onChange={onChange}
        />
        <button>회원가입</button>
        {error && <span>다시 확인하세요.</span>}
      </form>
      <Link to="/login">로그인</Link>
    </RegisterBlock>
  );
};

export default Register;
