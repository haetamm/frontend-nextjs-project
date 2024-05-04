import Image from 'next/image';
import {  GiWorld } from 'react-icons/gi';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCompass } from 'react-icons/ai';
import DropdownComp from './DropdownComp';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../../utils/StateContext';
import { useContext } from 'react';


const NavbarComp = ({ showDropdown, toggleDropdown, visible, transparent, handleLogout }) => {
    const router = useRouter();
    const { loggedIn } = useContext(AuthContext);
    
    return (
        <nav role="navigation" className={`md:block bg-slate-200 hidden fixed w-full transition-shadow duration-300 navbar ${visible ? 'navbarCustom--visible' : 'navbarCustom--hidden'} ${transparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
            <div className="mx-auto container px-1 md:px-3 lg:px-4 py-0 hidden md:block">
                <div className="lg:flex lg:items-center lg:justify-between justify-end">
                    
                    <Link href={'/'} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md hidden lg:flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                        <div className="flex items-center">
                            <GiWorld size={44}/>
                            <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal px-3">The North</h2>
                        </div>
                    </Link>
                    <div className="flex">
                        <div className="hidden md:flex md:mr-6 xl:mr-16">
                            <Link href={'/home'} className={`${router.pathname == "/home" ? "text-indigo-700 border-b-2 border-indigo-700" : "border-transparent"} flex px-5 items-center py-2 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out`}>
                                <span className="mr-2">
                                    <MdOutlineDashboardCustomize className='lg:h-8 lg:w-8'/>
                                </span>
                                Home
                            </Link>
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-2 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <HiOutlinePuzzle className='lg:h-8 lg:w-8' />
                                </span>
                                Products
                            </a>
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-2 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <AiOutlineCompass className='lg:h-8 lg:w-8'/>
                                </span>
                                Performance
                            </a>
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-2 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <BsCodeSlash className='lg:h-8 lg:w-8'/>
                                </span>
                                Deliverables
                            </a>
                        </div>
                        <div className="hidden md:flex items-center">
                        { !loggedIn ? (
                                <>
                                    <Link href={'/guest/login'} className="relative mr-6">
                                        <button className={` ${router.pathname == "/guest/login" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2.5 text-xs`}>Login</button>
                                    </Link>
                                    <Link href={'/guest/register'} className="relative mr-6">
                                        <button className={` ${router.pathname == "/guest/register" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2.5 text-xs`}>Register</button>
                                    </Link> 
                                </>

                                ) : ( 
                                <>
                                    <span className="relative mr-6">
                                        <button onClick={handleLogout} className={` bg-red-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-black focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded px-5 py-2.5 text-xs`}>Logout</button>
                                    </span>
                                    <div className="ml-6 relative">
                                        <button aria-label="dropdown" onClick={showDropdown} className="focus:outline-none border-b-2 border-transparent focus:border-indigo-700 py-2 focus:text-indigo-700 text-gray-600 hover:text-indigo-700 flex items-center relative">
                                            {toggleDropdown && 
                                                <DropdownComp />
                                            }
                                            <div className="cursor-pointer text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                                <Image
                                                    priority
                                                    src="/image/noimage.png"
                                                    className='rounded h-10 w-10 object-cover'
                                                    height={48}
                                                    width={48}
                                                    alt="dafault"
                                                />
                                            </div>
                                            <div className="ml-1">
                                                <BiChevronDown size={22} />
                                            </div>
                                        </button>
                                    </div>
                                    
                                </>
                                )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComp
