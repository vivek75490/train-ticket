import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  // function getRole() {
  //   if (localStorage.getItem('role')) {
  //     return localStorage.getItem('role');
  //   }
  //   return '';
  // }

  // const setNewRole = (newRole) =>{
  //   setRole(newRole);
  //   localStorage.setItem("role",newRole);
  // }

  const value = {
    role,
    setRole,
    userId,
    setUserId
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}