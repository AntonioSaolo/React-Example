import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin } from './reducers/login';

// my import
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Test from './components/Test';



function App() {

  const isAuthenticated = useSelector(selectLogin)
  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
      <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
      <Route path="/test" element={isAuthenticated ? <Test /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
