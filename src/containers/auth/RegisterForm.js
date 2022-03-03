// 회원가입 로직
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import Register from '../../components/auth/Register';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import { withRouter } from 'react-router-dom';
import { client } from '../../lib/api/auth';

const RegisterForm = ({ history }) => {
  // const [username, setUsername] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [password, setPassword] = useState('');
  // const [ConfirmPassword, setConfirmPassword] = useState('');
  // const url = window.location.pathname;
  // const parse = url.split('/');

  const { AuthState, AuthDispatch } = useContext(Auth);
  console.log(AuthState, '이거뭐여');
  console.log(AuthState.user, '야이거뭐여');
  const [error, setError] = useState(null);

  // 비동기
  const register = async () => {
    // setError(false);
    try {
      console.log('hi');
      const res = await client.post('/auth/register', {
        // username,
        // nickname,
        // password,
        // ConfirmPassword

        username: AuthState.user.username,
        nickname: AuthState.user.nickname,
        password: AuthState.user.passwored,
        confirmPassword: AuthState.user.confirmPassword
      });
      console.log(res, 'res');
      console.log(AuthState, '확인1');
      await AuthDispatch({
        type: REGISTER_SUCCESS,
        auth: res
      });

      res.data && history.push('/');
    } catch (error) {
      console.log(error, '회원가입에러');
      await AuthDispatch({
        type: REGISTER_FAILURE,
        error: error.res
      });
      // setError(true);
    }
  };
  console.log(AuthState, '확인2');
  // const onChangeUsername = e => {
  //   setUsername(e.target.value);
  // };
  // const onChangeNick = e => {
  //   setNickname(e.target.value);
  // };
  // const onChangePassword = e => {
  //   setPassword(e.target.value);
  // };
  // const onChangeConfirmPassword = e => {
  //   setConfirmPassword(e.target.value);
  // };

  const onChange = e => {
    const { value, name } = e.target;
    console.log(value, name);
    console.log('이거여야함');
    AuthDispatch({
      type: CHANGE_FIELD,
      form: 'user',
      key: name,
      value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('흠?');
    register();
    console.log('음..');
  };

  useEffect(() => {
    console.log(232);
    AuthDispatch({
      type: INITIALIZE_FORM,
      form: 'user'
    });
  }, []);

  return (
    <Register
      position="user"
      form="user"
      onChange={onChange}
      // onChangeUsername={onChangeUsername}
      // onChangeNick={onChangeNick}
      // onChangePassword={onChangePassword}
      // onChangeConfirmPassword={onChangeConfirmPassword}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
