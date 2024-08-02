import {  GiWorld } from 'react-icons/gi';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineCompass } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsCodeSlash } from 'react-icons/bs';


const NavbarComp = ({ visible, transparent }) => {
    const router = useRouter();

    return (
        <>
            <nav role="navigation" className={` bg-slate-200 fixed w-full transition-shadow duration-300 navbar ${visible ? 'navbarCustom--visible' : 'navbarCustom--hidden'} ${transparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
                <div className="mx-auto container px-1 md:px-3 lg:px-4 py-0 block">
                    <div className="md:flex md:items-center md:justify-between justify-end">
                        
                        <Link href={'/'} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md hidden md:flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                            <div className="flex items-center">
                                <GiWorld size={44}/>
                                <h2 className="hidden lg:block text-base text-gray-700 font-bold leading-normal px-3">The North</h2>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <div className="hidden md:flex md:mr-2 xl:mr-16">
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
                                    About
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
                            <div className="flex items-center">
                                <Link href={'/guest/login'} className="relative mr-3">
                                    <button className={` ${router.pathname == "/guest/login" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2.5 text-xs`}>Login</button>
                                </Link>
                                <Link href={'/guest/register'} className="relative mr-3">
                                    <button className={` ${router.pathname == "/guest/register" ? "text-red-500 font-bold bg-blue-700" : "bg-gray-100"} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2.5 text-xs`}>Register</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComp
