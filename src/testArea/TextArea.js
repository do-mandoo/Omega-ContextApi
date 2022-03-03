import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LOGIN_SUCCESS } from '../contexts/auth';
import { Auth } from '../contexts/store';
import { withRouter } from 'react-router-dom';
import { client } from '../lib/api/auth';

const TextAreaBlock = styled.div`
  display: flex;
`;

const TextArea = () => {
  const [title, setTitle] = useState('');

  const onChange = e => {
    setTitle(e.target.value);
  };
  const onSubmit = async e => {
    e.preventDefault();
    let body = {
      title
    };
    console.log(body, 'body');
    await client.post('/posts', body);
  };

  // const textarea = () => {};
  // useEffect(() => {}, []);

  return (
    <TextAreaBlock>
      <form onSubmit={onSubmit}>
        <textarea className="textValue" value={title} onChange={onChange} />
        <button>확인</button>
      </form>
    </TextAreaBlock>
  );
};

export default withRouter(TextArea);
