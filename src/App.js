import { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PostLists from './components/posts/PostLists';
import { AuthReducer, AuthInitialState } from './contexts/auth';
import { Auth, Write } from './contexts/store';
import { WriteInitialState, WriteReducer } from './contexts/write';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import TextArea from './testArea/TextArea';

function App() {
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, AuthInitialState);
  const [WriteState, WriteDispatch] = useReducer(
    WriteReducer,
    WriteInitialState
  );
  return (
    <>
      {/* <TextArea /> */}
      <Write.Provider value={{ WriteState, WriteDispatch }}>
        <Auth.Provider value={{ AuthState, AuthDispatch }}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/post" component={PostLists} />
            <Route path="/write" component={WritePage} />
            <Route path="/" component={PostListPage} />
          </Switch>
        </Auth.Provider>
      </Write.Provider>
    </>
  );
}

export default App;
