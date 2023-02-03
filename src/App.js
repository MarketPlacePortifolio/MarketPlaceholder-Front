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
import { Register } from './pages/Register';
import { Products } from './pages/Products';
import { Profile } from './pages/Profile';
import useToken from './hooks/useToken';

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
            <Route path="/sign-up" element={<Register/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/profile" element={
              <ProtectedRouteGuard>
                <Profile/>
              </ProtectedRouteGuard>} 
            />
            <Route index path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}

export default App;
