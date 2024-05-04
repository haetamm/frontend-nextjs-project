import { useState } from 'react';
import { GiWorld } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import SIdebarComp from './SIdebarComp';
import NavbarComp from './NavbarComp';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../../utils/StateContext';
import { useContext } from 'react';
import handleLogout from '../../utils/handleLogout';
import useScroll from '../../utils/useScrollHandler';
import ModalComp from '../utils/ModalComp';


const NavComp = ({ children, guest }) => {
    const router = useRouter();
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const { loggedIn, token } = useContext(AuthContext);
    const { visible, transparent } = useScroll();

    const toggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    const handleLogoutClick = async () => {
        await handleLogout(router, loggedIn?.user?.id);
    };

    return (
        <div className=" w-full">
            {guest &&
                <>
                    <NavbarComp showDropdown={toggleDropdown} handleLogout={handleLogoutClick} toggleDropdown={isOpenDropdown} visible={visible} transparent={transparent}/>
                    <div className={`mx-auto container px-8 py-8 hidden md:block bg-transparent`}></div>
                
                </>
            }
        
            <div className={`py-6 px-6 w-full flex md:hidden justify-between items-center bg-transparent top-0 z-40`}></div>
            <div className={`py-2 px-6 w-full flex md:hidden justify-between items-center top-0 z-40 fixed navbar ${visible ? 'navbarCustom--visible' : 'navbarCustom--hidden'} ${transparent ? 'bg-black' : 'bg-black'}`}>
                <div aria-label="logo" role="img" tabIndex="0" className="focus:outline-none w-24">
                    <GiWorld className='hidden md:block'/>
                </div>
                <div className="flex items-center">
                    { !loggedIn ? (
                        <>
                            <Link href={'/guest/login'} className="relative mr-6">
                                <button className={` ${router.pathname == "/guest/login" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 text-md py-2`}>Login</button>
                            </Link>
                            <Link href={'/guest/register'} className="relative mr-6">
                                <button className={` ${router.pathname == "/guest/register" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 text-md py-2`}>Register</button>
                            </Link> 
                        </>
                        ) : (
                            <>
                                <span className="relative mr-6">
                                    <button onClick={()=>window.my_modal_3.showModal()} className={` bg-red-300 text-black focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded px-5 text-md py-1`}>Logout</button>
                                </span>
                                
                                <ModalComp id='my_modal_3' title='Logout?' body='You can always log back in at any time.' handle={handleLogoutClick}/>
                            
                            </>

                        )
                    }
                    
                    <button id="menu" onClick={toggleSidebar}  aria-label="open menu" className="focus:outline-none bg-black p-1 focus:ring-2 focus:ring-gray-600 text-white">
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>
            {isOpenSidebar && 
                <SIdebarComp showSIdebar={toggleSidebar} />
            }    
            <div onClick={isOpenDropdown ? toggleDropdown : null}>
                {children}
            </div>
        </div>  
    )
}

export default NavComp