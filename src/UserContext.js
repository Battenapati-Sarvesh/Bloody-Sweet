import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: '',
    
    // Other user details
  });

  // Function to update user data (e.g., after login)
  const updateUser = (updatedUserData) => {
    setUserData(updatedUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};