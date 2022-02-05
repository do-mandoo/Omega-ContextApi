import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  ul,
  li {
    list-style: none;
    display: inline;
    margin-left: 20px;
  }
`;

const Spacer = styled.div`
  height: 4rem;
  border-bottom: 1px solid #aaa;
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <div>
          <h1>K-MANIA</h1>
        </div>
        <div>
          <ul>
            <li>News</li>
            <li>Free-Talk</li>
            <li>Fun</li>
            <li>More</li>
          </ul>
        </div>
        <div>
          <button>로그인</button>
        </div>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
