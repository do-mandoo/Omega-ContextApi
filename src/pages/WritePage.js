import React from 'react';
import styled from 'styled-components';
import WriteForm from '../containers/post/WriteForm';
const WritePageBlock = styled.div`
  display: flex;
`;

const WritePage = () => {
  return (
    <WritePageBlock>
      <WriteForm />
    </WritePageBlock>
  );
};

export default WritePage;
