import React from 'react';
import Reset from './assets/Reset';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Login } from './pages/Room';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className='App'>
      <Reset />
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route index path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
