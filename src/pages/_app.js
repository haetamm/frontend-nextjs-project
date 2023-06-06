import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../../utils/AuthContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
