import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../../utils/AuthContext';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { notificationHelper } from '../../utils/notificationHelper';
import '../../utils/diffforHumans';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const notificationShown =
      notificationHelper(
        `Selamat datang ${sessionStorage.getItem('loginSuccess')}!`,
        'loginSuccess'
      );
  
    if (notificationShown) {
      sessionStorage.removeItem('loginSuccess');
    }
  }, []);

  return (
    <>
      <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    
    </>
  )
}
