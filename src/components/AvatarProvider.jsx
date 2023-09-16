import React, { createContext, useContext, useRef } from 'react';

export const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const avatarRef = useRef();

  return (
    <AvatarContext.Provider value={{ avatarRef }}>
      {children}
    </AvatarContext.Provider>
  );
};