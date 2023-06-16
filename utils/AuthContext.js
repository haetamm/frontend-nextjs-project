import { createContext, useState, useEffect } from 'react';
import endpoint from './api-endpoint';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await endpoint.get('auth');
        console.log(response.data);

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

  const updateLoginStatus = (data) => {
    setLoggedIn(data);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, updateLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
