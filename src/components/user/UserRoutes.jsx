import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
const UserRoutes = ({ children }) => {
  const { role } = useAuth();

  // let location = useLocation();
  if (role === 'user') {
    return children;
  } else {
    return <Navigate to='/userlogin' />;
  }
};

export default UserRoutes;