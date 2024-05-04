import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { AiOutlineLogout } from 'react-icons/ai';
import AuthContext from '../../utils/StateContext';
import Link from 'next/link';
import ModalComp from '../utils/ModalComp';

const DropdownUser = ({ handleLogout }) => {
    const { loggedIn } = useContext(AuthContext);
    if (!loggedIn || !loggedIn.user) {
        return null;
    }

    const resetPage = () => {
        sessionStorage.setItem('savePageAdmin', 1);
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
                            { loggedIn.is_admin == true && 
                                <Link href={'/admin'} className="py-1 cursor-pointer hidden xs:block">
                                    <span className="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white flex">
                                        <MdOutlineAdminPanelSettings className='h-5 w-5' />
                                        <span className="ml-2">Administrator</span>
                                    </span>
                                </Link>
                            }
                            <Link href={'/profile'} className="py-1 cursor-pointer hidden xs:block">
                                <span className="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white flex">
                                    <CgProfile className='h-5 w-5' />
                                    <span className="ml-2">My Profile</span>
                                </span>
                            </Link>
                            <button onClick={()=>window.my_modal_1.showModal()} className="py-1 cursor-pointer hidden xs:block w-full">
                                <span className="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white flex">
                                    <AiOutlineLogout className='h-5 w-5' />
                                    <span className="ml-2">Logout</span>
                                </span>
                            </button>
                            <ModalComp id='my_modal_1' title='Logout?' body='You can always log back in at any time.' handle={handleLogout}/>
                        
                        </div>
                    </div>
                </div>
            )}
        </>
  )
}

export default DropdownUser