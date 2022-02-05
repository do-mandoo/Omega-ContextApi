import React from 'react';
import styled from 'styled-components';

const CategoriesBlock = styled.div`
  border: 1px solid red;
  width: 260px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  position: fixed;
  padding: 48px;
  padding-right: 0;
`;

const categories = [
  {
    name: 'often',
    text: '자주찾는 게시글'
  },
  {
    name: 'all',
    text: '전체'
  },
  {
    name: 'question',
    text: '질문'
  },
  {
    name: 'nomal',
    text: '일반'
  }
];

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <div key={c.name}>{c.text}</div>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
