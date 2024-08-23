import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
const AdminRoutes = ({ children }) => {
  const { role } = useAuth();

  // let location = useLocation();
  if (role === 'admin') {
    return children;
  } else {
    return <Navigate to='/adminlogin' />;
  }
};

export default AdminRoutes;