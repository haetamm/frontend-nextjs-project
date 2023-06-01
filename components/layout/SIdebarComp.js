import Image from 'next/image';
import { GiPuzzle, GiWorld } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineClose } from 'react-icons/ai';
import { TiMessages } from 'react-icons/ti';
import { IoIosNotificationsOutline } from 'react-icons/io';

const SIdebarComp = ({ showSIdebar }) => {
  return (
    <>
        <div className="fixed w-full h-full z-40 xl:hidden transform translate-x-0 top-0" id="mobile-nav">
            <div className="bg-gray-800 opacity-50 w-full h-full" onClick={showSIdebar}></div>
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                <div className="px-6 h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div>
                            <div className="mt-6 flex w-full items-center justify-between">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <GiWorld size={20}/>
                                        <p tabIndex="0" className="focus:outline-none text-base md:text-2xl text-gray-800 ml-3">The North</p>
                                    </div>
                                    <button id="cross" onClick={showSIdebar} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded-md text-gray-800">
                                        <AiOutlineClose />
                                    </button>
                                </div>
                            </div>
                            <ul className="f-m-m">
                                <li>
                                    <a className="cursor-pointer">
                                        <div className="text-gray-800 pt-10">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                    <MdOutlineDashboardCustomize size={20}/>
                                                </div>
                                                <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 text-indigo-700 xl:text-base text-base ml-3">Dashboard</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="cursor-pointer">
                                        <div className="text-gray-800 pt-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                        <GiPuzzle size={20}/>
                                                    </div>
                                                    <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3">Products</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="cursor-pointer">
                                        <div className="text-gray-800 pt-8">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                    <AiOutlineCompass size={20}/>
                                                </div>
                                                <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3">Performance</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="text-gray-800 pt-8 cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                <BsCodeSlash size={20}/>
                                            </div>
                                            <p tabIndex="0" className="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3">Deliverables</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full pt-4">
                            <div className="flex justify-center mb-4 w-full">
                                <div className="relative w-full">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <BiSearchAlt2 />
                                    </div>
                                    <input className="focus:ring-2 focus:ring-gray-600 bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="border-t border-gray-300">
                                <div className="w-full flex items-center justify-between pt-1">
                                    <div className="flex items-center">
                                        <Image
                                            priority
                                            src="/image/profile.jpg"
                                            className='rounded h-10 w-10 object-cover'
                                            height={48}
                                            width={48}
                                            alt="default"
                                        />
                                        <p tabIndex="0" className="focus:outline-none text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                    </div>
                                    <ul className="flex">
                                        <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                                            <div tabIndex="0" className="focus:outline-none focus:text-indigo-600 w-6 h-6 md:w-8 md:h-8">
                                                <TiMessages size={20}/>
                                            </div>
                                        </li>
                                        <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                                            <div tabIndex="0" className="focus:outline-none focus:text-indigo-600 w-6 h-6 md:w-8 md:h-8">
                                                <IoIosNotificationsOutline size={20}/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SIdebarComp