import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostLists from './components/posts/PostLists';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/post" element={<PostLists />} />

        <Route path="/" element={<PostListPage />} />
      </Routes>
    </>
  );
}

export default App;
