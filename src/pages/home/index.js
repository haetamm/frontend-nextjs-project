import React from 'react';
import Layout from '../../../components/layout';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const siteTitle = 'Home | The North';
    const siteDescription = 'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
    const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <Layout guest={!isLoggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
        <div className="flex w-full justify-center gap-0 lg:bg-white">
            {isLoggedIn && 
                <div className="flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24 lg:max-w-none xl:-mr-0 xl:w-full xl:max-w-xs 2xl:justify-end">
                    <main className="hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x"></main>
                    <div className="fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 bg-white xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72">
            
                        <div className="flex flex-col justify-center gap-2 xs:items-center xl:items-stretch">
                            <h1 className="hidden md:flex">
                                <a className="custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 dark:text-twitter-icon dark:hover:bg-dark-primary/10">
                                </a>
                            </h1>

                            <div className="flex items-center justify-around xs:flex-col xs:justify-center xl:block">
                                <a className="group py-1 outline-none flex">
                                    <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                dark:group-focus-visible:ring-white xs:p-3 xl:pr-5 font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                            className="h-7 w-7">
                                            <path
                                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                                            </path>
                                            <path
                                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                                            </path>
                                        </svg>
                                        <p className="hidden xl:block">Home</p>
                                    </div>
                                </a>
                                <a className="group py-1 outline-none flex cursor-not-allowed" href="/explore">
                                    <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
                                duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" aria-hidden="true" className="h-7 w-7">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
                                        </svg>
                                        <p className="hidden xl:block">Explore</p>
                                    </div>
                                </a>
                                <a className="py-1 outline-none flex" href="/notifications">
                                    <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
                                duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" aria-hidden="true" className="h-7 w-7">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                                            </path>
                                        </svg>
                                        <p className="hidden xl:block">Notifications</p>
                                    </div>
                                </a>
                                <a className="group py-1 outline-none hidden xs:flex cursor-not-allowed group" href="/user/romlahrom4219">
                                    <div className="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
                                duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
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

                            <button className="custom-button main-tab accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 bg-blue-700 hover:text-red-700 rounded-full p-2 xl:w-11/12" type="button">
                                <svg className="fill-current block h-6 w-6 xl:hidden" viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path
                                            d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
                                        </path>
                                    </g>
                                </svg>
                                <p className="hidden xl:block">Tweet</p>
                            </button>
                        </div>

                        <div className="relative">
                            <button className="custom-button main-tab dark-bg-tab flex w-full items-center justify-between hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
                                type="button">
                                <div className="flex gap-3 truncate">
                                    <a href=""
                                        className="blur-picture md:flex hidden self-start pointer-events-none truncate text-start leading-5 xl:block">
                                        <figure className='w-[40px]'>
                                            <span
                                                className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                                                <span
                                                    className="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span>
                                            </span>
                                        </figure>
                                    </a>
                                    <div className="hidden truncate text-start leading-5 xl:block">
                                        <a href="" className="flex items-center gap-1 truncate font-bold pointer-events-none start">
                                            <p className="truncate">romlah rom</p>
                                        </a>
                                        <a href="" className="truncate text-light-secondary dark:text-dark-secondary pointer-events-none">
                                            <p>@thaetamii</p>
                                        </a>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true" className="hidden h-6 w-6 xl:block">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            }

            <div className="bg-white hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
                    
                <section className="bg-white py-6 sm:py-8">
                    <div className="mx-auto max-w-screen-xl px-4 md:px-8"> 
                        <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">April 2, 2022</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Pines and the Mountains</a>
                            </h2>

                            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

                            <div>
                                <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                            </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">April 2, 2022</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Coding Mania</a>
                            </h2>

                            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

                            <div>
                                <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                            </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">April 2, 2022</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">Architectural Warfare</a>
                            </h2>

                            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

                            <div>
                                <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                            </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">April 2, 2022</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">Blues in Architechture</a>
                            </h2>

                            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

                            <div>
                                <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                            </div>
                            </div>
                        </article>
                        </div>
                    </div>
                </section>




            </div>
            
        </div>
    </Layout>
  )
}

export default HomePage;