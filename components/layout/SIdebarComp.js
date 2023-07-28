import Image from 'next/image';
import { GiWorld } from 'react-icons/gi';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineClose } from 'react-icons/ai';
import { TiMessages } from 'react-icons/ti';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../../utils/AuthContext';
import { useContext } from 'react';

const SIdebarComp = ({ showSIdebar }) => {
    const { loggedIn } = useContext(AuthContext);
    const router = useRouter();
    return (
        <>
            <div className="fixed w-full h-full z-40 md:hidden transform translate-x-0 top-0" id="mobile-nav">
                <div className="bg-gray-800 opacity-50 w-full h-full" onClick={showSIdebar}></div>
                <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                    <div className="px-6 h-full">
                        <div className="flex flex-col justify-between h-full w-full">
                            <div>
                                <div className="mt-6 flex w-full items-center justify-between">
                                    <div className="flex items-center justify-between w-full">
                                        <Link href={'/'} className="flex items-center">
                                            <GiWorld size={40}/>
                                            <p tabIndex="0" className="focus:outline-none text-base md:text-xl font-bold text-gray-800 ml-3 hidden md:block">The North</p>
                                        </Link>
                                        <button id="cross" onClick={showSIdebar} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded-md text-gray-800">
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <Link href={'/home'} className="cursor-pointer">
                                            <div className="text-gray-800 pt-10 pb-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                        <MdOutlineDashboardCustomize size={24}/>
                                                        </div>
                                                        <p tabIndex="0" className={`${router.pathname == "/home" ? "text-indigo-700 border-b-2 border-indigo-700" : "text-gray-800"} font-bold xl:text-base md:text-xl text-base ml-3`}>Home</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    { loggedIn !== null && loggedIn.is_admin == true &&  
                                        <li>
                                            <Link href={'/admin'} className="cursor-pointer">
                                                <div className="text-gray-800 py-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                            <MdOutlineAdminPanelSettings size={24}/>
                                                            </div>
                                                            <p tabIndex="0" className={`${router.pathname == "/admin" ? "text-indigo-700 border-b-2 border-indigo-700" : "text-gray-800"} font-bold xl:text-base md:text-xl text-base ml-3`}>Administrator</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                        </li>
                                    }
                                    <li>
                                        <a className="cursor-pointer hover:bg-blue-300">
                                            <div className="text-gray-800 py-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                            <HiOutlinePuzzle size={24}/>
                                                        </div>
                                                        <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 font-bold text-gray-800 xl:text-base md:text-xl text-base ml-3">Products</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer">
                                            <div className="text-gray-800 py-4">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                        <AiOutlineCompass size={24}/>
                                                    </div>
                                                    <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 font-bold text-gray-800 xl:text-base md:text-xl text-base ml-3">Performance</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="py-4 cursor-pointer">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                    <BsCodeSlash size={24}/>
                                                </div>
                                                <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 font-bold text-gray-800 xl:text-base md:text-xl text-base ml-3">Deliverables</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full pt-6 md:pt-4">
                                <div className="flex justify-center mb-4 w-full">
                                    <div className="relative w-full">
                                        <div className="text-gray-500 absolute ml-2 inset-0 m-auto w-4 h-4">
                                            <BiSearchAlt2 size={20}/>
                                        </div>
                                        <input className="focus:ring-2 focus:ring-gray-600 bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>
                                { loggedIn &&
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between pt-1">
                                            <Link href={'/profile'} className="flex items-center">
                                                <Image
                                                    priority
                                                    src="/image/noimage.png"
                                                    className='rounded h-10 w-10 object-cover'
                                                    height={48}
                                                    width={48}
                                                    alt="default"
                                                />
                                                <p tabIndex="0" className="focus:outline-none text-gray-800 text-base leading-4 ml-2">{loggedIn.user.username}</p>
                                            </Link>
                                            <ul className="flex">
                                                <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                                                    <div tabIndex="0" className="focus:outline-none focus:text-indigo-600 font-bold w-6 h-6 md:w-8 md:h-8">
                                                        <TiMessages size={24}/>
                                                    </div>
                                                </li>
                                                <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                                                    <div tabIndex="0" className="focus:outline-none focus:text-indigo-600 font-bold w-6 h-6 md:w-8 md:h-8">
                                                        <IoIosNotificationsOutline size={24}/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SIdebarComp