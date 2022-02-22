// 회원가입 로직
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import Register from '../../components/auth/Register';
import {
  INITIALIZE_FORM,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import { withRouter } from 'react-router-dom';
import { client } from '../../lib/api/auth';

const RegisterForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // 비동기
  const register = async () => {
    setError(false);
    try {
      const res = await client.post('/auth/register', {
        username,
        nickname,
        password
      });
      res.data && history.push('/');
    } catch (error) {
      setError(true);
    }
  };

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangeNick = e => {
    setNickname(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(5);
    register();
  };

  return (
    <Register
      form="register"
      onChangeUsername={onChangeUsername}
      onChangeNick={onChangeNick}
      onChangePassword={onChangePassword}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
