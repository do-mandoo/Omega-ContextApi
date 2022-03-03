import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginBlock = styled.div`
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
  width: 400px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-flow: column nowrap;
  a > input {
    width: 100%;
  }
  input,
  button {
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
  button {
    width: 400px;
    font-weight: 500;
    cursor: pointer;
    background-color: #e8e8e8;
    border: none;
    :hover {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const Login = ({ onChange, onSubmit, form, error }) => {
  // const [login, setLogin] = useState('');
  // const [pw, setPw] = useState('');

  // const onSubmit = e => {
  //   e.preventDefault();
  // };

  return (
    <LoginBlock>
      <h3 className="a11y">로그인</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="idText">ID</label>
        <input
          id="idText"
          nema="username"
          type="text"
          className="idText"
          placeholder="아이디를 입력하세요."
          // value={form.username}
          onChange={onChange}
          // value={login}
          // onChange={e => setLogin(e.target.value)}
        />

        <label htmlFor="pwText">PW</label>
        <input
          id="pwText"
          name="password"
          type="password"
          className="pwText"
          placeholder="비밀번호를 입력하세요"
          // value={form.password}
          onChange={onChange}
          // value={pw}
          // onChange={e => setPw(e.target.value)}
        />
        <button>로그인</button>
      </form>
      <Link to="/register">
        <button>회원가입</button>
      </Link>
    </LoginBlock>
  );
};

export default Login;
