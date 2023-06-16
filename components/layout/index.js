import NavComp from './NavComp';
import HeadComp from './HeadComp';
import FooterComp from './FooterComp';
import { useEffect, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { notificationHelper } from '../../utils/notificationHelper';
import AuthContext from '../../utils/AuthContext';

const Index = ({ children, siteTitle, siteDescription, guest }) => {
  const { loggedIn } = useContext(AuthContext);
  

  useEffect(() => {
    const notificationShown =
      notificationHelper(
        `Selamat ${sessionStorage.getItem('registrationSuccess')}, Silakan login!.`,
        'registrationSuccess'
      );
  
    if (notificationShown) {
      sessionStorage.removeItem('registrationSuccess') || sessionStorage.removeItem('addThreadSuccess');
    }
  }, []);


  return (
    <div className='bg-slate-200'>
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
        <HeadComp siteTitle={siteTitle} siteDescription={siteDescription}/>
        <NavComp guest={guest}>
          <div className={` ${!loggedIn ? 'container mx-auto mt-2' : 'w-full xl:w-[1350px] 2xl:mx-auto'}`}>
            {children}    
          </div>
        </NavComp>
        {guest && 
          <FooterComp />
        }
    </div>
  )
}

export default Index
