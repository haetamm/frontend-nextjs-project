import NavComp from './NavComp';
import HeadComp from './HeadComp';
import FooterComp from './FooterComp';
import { useEffect, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { notificationHelper } from '../../utils/notificationHelper';
import useScrollHandler from '../../utils/useScrollHandler';
import AuthContext from '../../utils/AuthContext';

const Index = ({ children, siteTitle, siteDescription, guest }) => {
  const scrolled = useScrollHandler();
  const { loggedIn } = useContext(AuthContext);
  

  useEffect(() => {
    const notificationShown =
      notificationHelper(
        `Selamat ${localStorage.getItem('registrationSuccess')}, Silakan login!.`,
        'registrationSuccess'
      );
  
    if (notificationShown) {
      localStorage.removeItem('registrationSuccess');
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
        <NavComp guest={guest} scrolled={scrolled} handleScroll={useScrollHandler} >
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
