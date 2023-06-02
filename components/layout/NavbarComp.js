import Image from 'next/image';
import { GiPuzzle, GiWorld } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCompass } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import DropdownComp from './DropdownComp';
import Link from 'next/link';

const NavbarComp = ({ showDropdown, toggleDropdown, scrolledNav, showShadow }) => {
    
    return (
        <nav role="navigation" className={`md:block hidden fixed w-full transition-shadow duration-300 ${scrolledNav ? 'shadow-md bg-white' : ''}`} onScroll={showShadow}>
            <div className="mx-auto container px-8 py-2 hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="inset-y-0 left-0 flex items-center xl:hidden">
                        <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <div className="visible md:hidden">
                                <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <div className="flex items-center">
                                            <MdOutlineDashboardCustomize />
                                            <span className="ml-2 font-bold">Dashboard</span>
                                        </div>
                                    </li>
                                    <li className="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                                        <div className="flex items-center">
                                            <GiPuzzle />
                                            <span className="ml-2 font-bold">Products</span>
                                        </div>
                                    </li>
                                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                        <AiOutlineCompass />
                                        <span className="ml-2 font-bold">Performance</span>
                                    </li>
                                    <li className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                        <BsCodeSlash />
                                    <span className="ml-2 font-bold">Deliverables</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <div className="flex items-center">
                                            <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                                <Image
                                                    priority
                                                    src="/image/profile.jpg"
                                                    className='rounded h-10 w-10 object-cover'
                                                    height={48}
                                                    width={48}
                                                    alt="defauilt"
                                                />
                                            </div>
                                            <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                                            <div className="sm:ml-2 text-white relative">
                                                <BiChevronDown />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <div className="flex items-center">
                                            <CgProfile />
                                            <span className="ml-2">Profile</span>
                                        </div>
                                    </li>
                                </ul>
                                <IoIosHelpCircleOutline />
                            </div>
                            <div className="hidden close-m-menu text-gray-700">
                                <CiSettings />
                            </div>
                        </div>
                    </div>
                    <Link href={'/'} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md hidden xl:flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                        <div className="flex items-center">
                            <GiWorld size={44}/>
                            <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal px-3">The North</h2>
                        </div>
                    </Link>
                    <div className="flex">
                        <div className="hidden md:flex md:mr-6 xl:mr-16">
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-3 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <MdOutlineDashboardCustomize />
                                </span>
                                Dashboard
                            </a>
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-3 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <GiPuzzle />
                                </span>
                                Products
                            </a>
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-3 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <AiOutlineCompass />
                                </span>
                                Performance
                            </a>
                            <a href="#" className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-3 text-sm leading-5 text-gray-700 hover:shadow-md focus:outline-none transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <BsCodeSlash />
                                </span>
                                Deliverables
                            </a>
                        </div>
                        <div className="hidden md:flex items-center">
                            <Link href={'/guest/login'} className="relative hidden md:block md:mr-6 my-2">
                                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:text-indigo-700 focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">Login</button>
                            </Link>
                            <Link href={'/guest/register'} className="relative hidden md:block md:mr-6 my-2">
                                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:text-indigo-700 focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">Register</button>
                            </Link>
                            <div className="ml-6 relative">
                                <button aria-label="dropdown" onClick={showDropdown} className="focus:outline-none border-b-2 border-transparent focus:border-indigo-700 py-2 focus:text-indigo-700 text-gray-600 hover:text-indigo-700 flex items-center relative">
                                    {toggleDropdown && 
                                        <DropdownComp />
                                    }
                                    <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                        <Image
                                            priority
                                            src="/image/profile.jpg"
                                            className='rounded h-10 w-10 object-cover'
                                            height={48}
                                            width={48}
                                            alt="dafault"
                                        />
                                    </div>
                                    <div className="ml-2 ">
                                        <BiChevronDown />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComp