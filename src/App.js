import { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PostLists from './components/posts/PostLists';
import { AuthReducer, AuthInitialState } from './contexts/auth';
import { Auth } from './contexts/store';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import TextArea from './testArea/TextArea';

function App() {
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, AuthInitialState);
  return (
    <>
      {/* <TextArea /> */}
      <Auth.Provider value={{ AuthState, AuthDispatch }}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/post" component={PostLists} />
          <Route path="/" component={PostListPage} />
        </Switch>{' '}
      </Auth.Provider>
    </>
  );
}

export default App;
