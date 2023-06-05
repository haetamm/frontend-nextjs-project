import NavComp from './NavComp';
import HeadComp from './HeadComp';
import FooterComp from './FooterComp';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { notificationHelper } from '../../utils/notificationHelper';
import useScrollHandler from '../../utils/useScrollHandler';


const Index = ({ children, siteTitle, siteDescription, guest }) => {
  const scrolled = useScrollHandler();

  useEffect(() => {
    const notificationShown =
      notificationHelper(
        `Selamat ${localStorage.getItem('registrationSuccess')}, Silakan login!.`,
        'registrationSuccess'
      ) ||
      notificationHelper(
        `Selamat datang ${localStorage.getItem('loginSuccess')}!`,
        'loginSuccess'
      );
  
    if (notificationShown) {
      localStorage.removeItem('registrationSuccess');
      localStorage.removeItem('loginSuccess');
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
          <div className={` ${guest ? 'container mx-auto' : 'w-full xl:w-[1350px] 2xl:mx-auto'}`}>
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
