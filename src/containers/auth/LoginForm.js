// 로그인 로직
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import Login from '../../components/auth/Login';
import {
  CHANGE_FIELD,
  // CHANGE_FIELD,
  INITIALIZE_FORM,
  LOGIN_FALIURE,
  LOGIN_SUCCESS,
  REGISTER_INFO
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import { withRouter } from 'react-router-dom';
import { client } from '../../lib/api/auth';

const LoginForm = ({ history }) => {
  // const url = window.loacation.href;
  // const parse = url.split('/');

  const { AuthState, AuthDispatch } = useContext(Auth);
  const [error, setError] = useState(null);
  console.log(1);
  console.log(AuthState, 'authState에 로그인전에 뭐있냥');
  // 비동기
  const login = async () => {
    console.log(32);
    try {
      console.log('여기까지');
      const res = await client.post('/auth/login', {
        username: AuthState.login.username,
        password: AuthState.login.password
      });
      console.log('이게 안된다는거지');
      console.log(res, 'res');

      localStorage.setItem('token-k-omega', res._id);
      console.log(localStorage.getItem('token-k-omega'));

      await AuthDispatch({
        type: LOGIN_SUCCESS,
        auth: res
      });
      await AuthDispatch({
        type: REGISTER_INFO,
        username: res.data.username,
        id: res.data._id
      });
      await history.push('/');
    } catch (error) {
      console.log(error, '로그인에러');
      await AuthDispatch({
        type: LOGIN_FALIURE,
        error: error.res
      });
      setError(error.res.status);
    }
  };

  const onChange = e => {
    const { value, name } = e.target;
    console.log('여기잘 써지냐');
    AuthDispatch({
      type: CHANGE_FIELD,
      form: 'login',
      key: name,
      value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(4);
    login();
  };

  useEffect(() => {
    console.log(2);
    AuthDispatch({
      type: INITIALIZE_FORM,
      form: 'login'
    });
  }, [AuthDispatch]);

  return (
    <Login form="login" onChange={onChange} onSubmit={onSubmit} error={error} />
  );
};

export default withRouter(LoginForm);
