import Link from 'next/link';
import { useRouter } from 'next/router';
import handleLogout from '../../utils/handleLogout';
import DropdownUser from './DropdownUser';


const SideBarUser = () => {
    const router = useRouter();

    const resetPage = () => {
        localStorage.setItem('currentPage', 1);
    }
    
    const handleLogoutClick = async () => {
        await handleLogout(router);
    };

    return (
        <div className="border-r-3 border-black flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24 lg:max-w-none xl:-mr-0 xl:w-full xl:max-w-[18rem] 2xl:justify-end">
            <div className="fixed bottom-0 z-10 flex w-full flex-col justify-between bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 bg-white xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72">

                <div className="flex flex-col justify-center gap-2 xs:items-center xl:items-stretch">
                    <h1 className="hidden md:flex">
                        <a className="custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 dark:text-twitter-icon dark:hover:bg-dark-primary/10">
                        </a>
                    </h1>

                    <div className="flex items-center justify-around xs:flex-col xs:justify-center xl:block">
                        <Link href={'/home?page=1'} onClick={resetPage} className="group py-1 outline-none flex">
                            <div className={`${router.pathname == "/home" ? "text-indigo-700 border-b-2" : "text-black"}custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2  group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10  dark:group-focus-visible:ring-white xs:p-3 xl:pr-5 font-bold`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                                    </path>
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                                    </path>
                                </svg>
                                <p className='hidden xl:block'>Home</p>
                            </div>
                        </Link>
                        <Link href={'/'} className="group py-1 outline-none flex">
                            <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2  group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-7 w-7">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
                                </svg>
                                <p className="hidden xl:block">Explore</p>
                            </div>
                        </Link>
                        <a href='#' className="py-1 outline-none flex cursor-not-allowed">
                            <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-7 w-7">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                                    </path>
                                </svg>
                                <p className="hidden xl:block">Notifications</p>
                            </div>
                        </a>
                        <a href='#' className="group py-1 outline-none hidden xs:flex cursor-not-allowed group">
                            <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2  group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10  dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-7 w-7">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
                                    </path>
                                </svg>
                                <p className="hidden xl:block">Profile</p>
                            </div>
                        </a>
                    </div>

                    <button className="cursor-pointer custom-button main-tab accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 bg-blue-700 hover:text-red-700 rounded-full p-2 xl:w-11/12" type="button">
                        <svg className="fill-current block h-6 w-6 xl:hidden" viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path
                                    d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
                                </path>
                            </g>
                        </svg>
                        <p className="hidden xl:block">Thread</p>
                    </button>
                </div>

                <DropdownUser handleLogout={handleLogoutClick}/>
            </div>
        </div>
    )
}

export default SideBarUser