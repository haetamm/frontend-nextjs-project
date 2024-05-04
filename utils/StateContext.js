import { createContext, useState, useEffect } from 'react';
import endpoint from './api-endpoint';
import Cookies from 'js-cookie';

const StateContext = createContext();

export function StateProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(null);

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
        console.error('Failed to fetch auth data:', error);
        setLoggedIn(null);
      }
    };

    fetchData();
  }, []);

  const updateLoginStatus = (data) => {
    setLoggedIn(data);
  };

  return (
    <StateContext.Provider value={{
      loggedIn,
      updateLoginStatus,
    }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
