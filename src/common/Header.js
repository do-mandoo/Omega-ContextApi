import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from '../contexts/store';

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
  const { AuthState, AuthDispatch } = useContext(Auth);
  console.log(AuthState, 'AuthState 뭐있는데');

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
          {AuthState.login || AuthState.login.username ? (
            <button>로그아웃</button>
          ) : (
            <>
              <button>
                <Link to="/login">로그인</Link>
              </button>
              <button>
                <Link to="/register">회원가입</Link>
              </button>
            </>
          )}
        </div>
        <button>
          <Link to="/write">글쓰기</Link>
        </button>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
