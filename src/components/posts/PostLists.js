import React from 'react';
import styled from 'styled-components';
import Header from '../../common/Header';
import Categories from '../Categories';

const PostListsBlock = styled.main`
  background-color: #aaa;
  margin-left: 260px;
  width: 100%;
  padding: 48px 0 48px 32px;
  height: calc(100% - 96px);
  position: fixed;
`;

const PostItem = () => {
  return (
    <div>
      <div>
        <h2>카테고리</h2>
        <div>Q abcde</div>
      </div>
      <div>A fghij</div>
    </div>
  );
};

const PostLists = () => {
  return (
    <>
      <Header />
      <div>
        <aside>
          <Categories />
        </aside>
        <PostListsBlock>
          <PostItem />
          <PostItem />
          <PostItem />
        </PostListsBlock>
      </div>
    </>
  );
};

export default PostLists;
