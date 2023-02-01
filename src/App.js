import React from 'react';
import Reset from './assets/Reset';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <div className='App'>
      <Reset />
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route index path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
