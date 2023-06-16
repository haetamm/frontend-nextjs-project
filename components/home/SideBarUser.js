import { FaHome } from 'react-icons/fa';
import { RiBook2Fill } from 'react-icons/ri';
import { AiOutlineFileSearch, AiFillBook } from 'react-icons/ai';
import { IoMdCreate } from 'react-icons/io';
import Link from 'next/link';
import { useRouter } from 'next/router';
import handleLogout from '../../utils/handleLogout';
import DropdownUser from './DropdownUser';
import {IoMdNotifications} from 'react-icons/io';
import { useContext } from 'react';
import AuthContext from '../../utils/AuthContext';



const SideBarUser = () => {
    const router = useRouter();
    const { loggedIn } = useContext(AuthContext);
    const threadClassName = router.pathname === '/[username]' ? "text-indigo-700" : "text-white"  ;

    const resetPage = () => {
        router.pathname === '/home' ? sessionStorage.setItem('currentPageHome', 1) : sessionStorage.setItem('currentPageUser', 1);
    }
    
    const handleLogoutClick = async () => {
        await handleLogout(router);
    };

    return (
        <div className="flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24 lg:max-w-none xl:-mr-0 xl:w-full xl:max-w-[18rem] 2xl:justify-end">
            <div className="fixed bottom-0 z-10 flex w-full flex-col justify-between bg-main-background py-0 xs:top-0 xs:h-full xs:w-auto xs:border-0 bg-black xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72">

                <div className="flex flex-col mt-0 xs:mt-10 md:mt-0 justify-center gap-2 xs:items-center xl:items-stretch">
                    <h1 className="hidden md:flex">
                        <a className="custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 dark:text-twitter-icon dark:hover:bg-dark-primary/10">
                        </a>
                    </h1>

                    <div className="flex items-center justify-around xs:flex-col xs:justify-center xl:block">
                        <Link href={'/home'} onClick={router.pathname == '/home' ? resetPage : undefined} className="group py-1 outline-none flex">
                            <div className={`${router.pathname == "/home" ? "text-indigo-700" : "text-white"} custom-button flex items-center justify-center gap-4 self-start p-2 text-xl xs:p-3 xl:pr-5`}>
                                <FaHome className='h-7 w-7'/>
                                <p className='hidden xl:block'>Home</p>
                            </div>
                        </Link>
                        <Link href={'/'} className="group py-1 outline-none flex">
                            <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl text-white xs:p-3 xl:pr-5">
                                <AiOutlineFileSearch className='w-7 h-7'/>
                                <p className="hidden xl:block">Explore</p>
                            </div>
                        </Link>
                        <a href='#' className="py-1 outline-none hidden xs:flex cursor-not-allowed">
                            <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl text-white xs:p-3 xl:pr-5">
                                <IoMdNotifications className='h-7 w-7'/>
                                <p className="hidden xl:block">Notifications</p>
                            </div>
                        </a>
                        <Link href={{ pathname: `/${loggedIn.user?.username}` }} onClick={router.pathname == '/[username]' ? resetPage : undefined} className="group py-1 outline-none flex cursor-pointer group">
                            <div className={`${threadClassName} custom-button flex items-center justify-center gap-4 self-start p-2 text-xl xs:p-3 xl:pr-5`}>
                                <RiBook2Fill className='h-7 w-7' />
                                <p className="hidden xl:block">Threads</p>
                            </div>
                        </Link>
                    </div>

                    <Link href={'/create'} className="cursor-pointer custom-button main-tab accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 bg-blue-700 hover:text-red-700 rounded-full p-2 xl:w-11/12" type="button">
                        <IoMdCreate className='h-6 w-6 xl:hidden'/>
                        <p className="hidden xl:block text-center">Create</p>
                    </Link>
                </div>

                <DropdownUser handleLogout={handleLogoutClick}/>
            </div>
        </div>
    )
}

export default SideBarUser