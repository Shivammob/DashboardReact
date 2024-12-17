import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

const ToastContext = createContext();

// Custom hook to use the toast context
export const useToast = () => useContext(ToastContext);

// ToastProvider component to wrap the app and provide toast functionality
export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={toast}>
      {children}
    </ToastContext.Provider>
  );
};
