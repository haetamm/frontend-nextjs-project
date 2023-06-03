import { useState } from 'react';
import { GiWorld } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import SIdebarComp from './SIdebarComp';
import NavbarComp from './NavbarComp';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import DropdownComp from './DropdownComp';
import { BiChevronDown } from 'react-icons/bi';

const NavComp = ({ children, scrolled, handleScroll }) => {
    const router = useRouter();
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    return (
        <div className=" w-full">
            <NavbarComp showDropdown={toggleDropdown} toggleDropdown={isOpenDropdown} scrolledNav={scrolled} showShadow={handleScroll}/>
            <div className='mx-auto container px-8 py-8 hidden md:block bg-transparent'></div>

        
            <div className='py-6 px-6 w-full flex md:hidden justify-between items-center bg-transparent top-0 z-40'></div>
            <div className={`py-4 px-6 w-full flex md:hidden justify-between items-center top-0 z-40 fixed ${scrolled ? 'shadow-md bg-white' : ''}`} onScroll={handleScroll}>
                <div aria-label="logo" role="img" tabIndex="0" className="focus:outline-none w-24">
                    <GiWorld />
                </div>
                <div className="flex items-center">
                    <Link href={'/guest/login'} className="relative mr-6">
                        <button className={` ${router.pathname == "/guest/login" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs`}>Login</button>
                    </Link>
                    <Link href={'/guest/register'} className="relative mr-6">
                        <button className={` ${router.pathname == "/guest/register" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs`}>Register</button>
                    </Link>
                    <button id="menu" onClick={toggleSidebar}  aria-label="open menu" className="focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md text-gray-800">
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>
            {isOpenSidebar && 
                <SIdebarComp showSIdebar={toggleSidebar}/>
            }    
            <div onClick={isOpenDropdown ? toggleDropdown : null}>
                {children}
            </div>
        </div>  
    )
}

export default NavComp