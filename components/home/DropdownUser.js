import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../../utils/AuthContext';

const DropdownUser = ({ handleLogout }) => {
    const { loggedIn } = useContext(AuthContext);
    if (!loggedIn || !loggedIn.user) {
        return null;
    }
    return (
        <>
            { loggedIn !== null && (
                <div className="justify-center lg:flex lg:justify-between hidden sm:block relative xl:w-11/12">
                    <div className="dropdown dropdown-top">
                        <button tabIndex="0" className="custom-button flex items-center justify-between gap-4 self-start p-2 text-xl text-white xs:p-3 xl:pr-5"  type="button">
                            <div className="flex justify-between gap-0 xl:gap-3 truncate">
                                <div className="blur-picture xs:block hidden self-start pointer-events-none truncate text-start leading-5 md:block">
                                    <figure className='w-[40px]'>
                                        <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                                            <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"></span>
                                            <Image
                                                priority
                                                src="/image/noimage.png"
                                                className='hidden h-15 w-15 md:block'
                                                height={60}
                                                width={60}
                                                alt="dafault"
                                            />
                                        </span>
                                    </figure>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="hidden truncate text-start leading-5 xl:block hover:text-red-600">
                                        <div className="flex items-center gap-1 truncate font-bold pointer-events-none start">
                                            <p className="truncate">{loggedIn.user.username}</p>
                                        </div>
                                        <small className="truncate text-light-secondary dark:text-dark-secondary pointer-events-none">
                                            <small>@{loggedIn.user.username}</small>
                                        </small>
                                    </div>
                                </div>
                                <svg xmln="http://www.w3.org/2000/svg hidden xl:block" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="hidden h-6 w-6 xl:block hover:border-red-600"><path data-v-63081264="" strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                            </div>
                        </button>
                        <div className="dropdown-content men mb-2 shadow bg-base-100 rounded-md hidden xs:block w-[15rem]">
                            <div className="py-1 cursor-pointer hidden xs:block">
                                <span className="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-2">My Profile</span>
                                </span>
                            </div>
                            <div className="py-1 cursor-pointer hidden xs:block md:hidden">
                                <span className="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white flex">
                                    
                                    <span className="ml-2">My Sastra</span>
                                </span>
                            </div>
                            <button onClick={handleLogout} className="py-1 cursor-pointer hidden xs:block w-full">
                                <span className="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <span className="ml-2">Logout</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
  )
}

export default DropdownUser