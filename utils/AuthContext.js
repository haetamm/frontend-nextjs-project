import { createContext, useState, useEffect } from 'react';
import endpoint from './api-endpoint';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await endpoint.get('auth');

        if (response.status === 200) {
          setLoggedIn(response.data);
        } else {
          setLoggedIn(null);
        }
      } catch (error) {
        setLoggedIn(null);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
