import { createContext, useState, useEffect } from 'react';
import endpoint from './api-endpoint';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await endpoint.get('auth');

        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        setLoggedIn(false);
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
