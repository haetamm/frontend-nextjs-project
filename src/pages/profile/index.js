import { useState } from 'react'
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import StateContext from '../../../utils/StateContext';
import Layout from '../../../components/layout';
import SideBarUser from '../../../components/home/SideBarUser';
import endpoint from '../../../utils/api-endpoint';
import { useForm } from '../../../utils/validationUser';
import { toast } from 'react-toastify';


const ProfilePage = () => {
    const siteTitle = 'My Profile | The North';
    const siteDescription =
        'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
    const router = useRouter();
    const { loggedIn } = useContext(StateContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [showPassNew, setShowPassNew] = useState(false);

    const { showPassword, toggleShowPassword, formData, errorMessages, setFormData, setErrorMessages, handleErrorResponse } = useForm();

    useEffect(() => {
        const getThread = async () => {
            try {
                const response = await endpoint.get(`auth`);
                const updatedFormData = { ...formData, username: response.data.user.username };
                setFormData(updatedFormData);
            } catch (error) {
                console.log(error);
            }
        };
        
        getThread();
    }, []);

    const toggleShowNewPassword = () => {
        setShowPassNew((showPassNew) => !showPassNew);
    };

    const handleUpdateUser = async () => {
        try {
            if (oldPassword === '') {
                toast.error('old password harus diisi');
                return
            }
            await endpoint.post('auth', { username: formData.username, password: oldPassword });
            const response = await endpoint.put('users', { username: newUsername !== '' ? newUsername : formData.username, password: formData.password });
            await endpoint.post('auth', { username: newUsername !== '' ? newUsername : formData.username, password: formData.password ? formData.password : oldPassword });
            toast.info(response.data.message);
            router.reload();
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 401) {
                    setErrorMessages({
                        username: 'username atau password salah',
                        password: 'username atau password salah'
                    });
                } else if (status === 422) {
                    console.log('Error 422:', data.errors);
                    handleErrorResponse(error.response.data);
                } else {
                    console.error('Error:', error);
                }
            } else {
                console.error('Error:', error);
            }
        }
    }

    const handleUsernameChange = (event) => {
        const updatedFormData = { ...formData, username: event.target.value };
        setFormData(updatedFormData);
    };

    const handleNewUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        const updatedFormData = { ...formData, password: event.target.value };
        setFormData(updatedFormData);
    };
      
    return (
        <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
            <div className="flex w-full justify-center gap-0 h-screen">
                {loggedIn && <SideBarUser />}

                <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
                    <section className="bg-slate-200 py-4">
                        <div className="mx-auto max-w-screen-xl px-2 md:px-8">
                            <div className="mb-5 md:mb-10 mt-6 md:mt-1">
                                <div className="mx-auto">
                                    <div className="min-h-screen p-0 xs:p-6 bg-gray-100 flex justify-center">
                                        <div className="xs:container max-w-screen-lg mx-auto">
                                            <h2 className="font-semibold text-xl text-gray-600">The North</h2>
                                            <p className="text-gray-500 mb-6">Stay fit, All day, every day.</p>

                                            <div className="bg-white rounded shadow-lg p-2 px-4 md:p-8 mb-6">
                                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                                    <div className="text-gray-600">
                                                        <p className="font-medium text-lg">Personal Details</p>
                                                        <p>Please fill out all the fields.</p>
                                                    </div>

                                                    <div className="lg:col-span-2">
                                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                            <div className="md:col-span-5">
                                                                <input  placeholder="Contoh nama" readOnly className="cursor-not-allowed text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none " />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <input readOnly value={formData.username} onChange={handleUsernameChange}placeholder="Old Username" className="cursor-not-allowed text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-gray-400" />
                                                            </div>
                                                            {errorMessages.username && 
                                                                <div className="md:col-span-5">
                                                                    <p style={{ color: 'red' }}>{errorMessages.username}</p>
                                                                </div>
                                                            }

                                                            <div className="md:col-span-5 select-none">
                                                                <input placeholder="contoh@gmail.com" readOnly className="cursor-not-allowed text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none " />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <input value={newUsername} onChange={handleNewUsernameChange}placeholder="New Username" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <input value={formData.password} type={showPassNew ? 'text' : 'password'} onChange={handleNewPasswordChange} placeholder="New Password" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <div className="inline-flex items-center">
                                                                <input 
                                                                    id="showHideCheckbox"
                                                                    checked={showPassNew}
                                                                    onChange={toggleShowNewPassword}
                                                                    type="checkbox" 
                                                                    className="form-checkbox" 
                                                                />
                                                                <label htmlFor="showHideCheckbox" className="ml-2">Show/Hide.</label>
                                                                </div>
                                                            </div>

                                                            <div className="md:col-span-3">
                                                                <input  placeholder="Address / Street" readOnly className="cursor-not-allowed text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none" />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                <input  placeholder="City" readOnly className="cursor-not-allowed text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none" />
                                                            </div>

                                                            <div className="md:col-span-2 ">
                                                                <div className="h-10 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 flex border border-gray-200 items-center mt-1">
                                                                    <input name="country" readOnly id="country" placeholder="Country" className="cursor-not-allowed px-4 appearance-none outline-none text-black placeholder-gray-600 w-full bg-transparent"  />
                                                                    <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                        </svg>
                                                                    </button>
                                                                    <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="md:col-span-2 ">
                                                                <div className="h-10 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 flex border border-gray-200 items-center mt-1">
                                                                    <input name="state" readOnly id="state" placeholder="State" className="cursor-not-allowed px-4 appearance-none outline-none text-black placeholder-gray-600 w-full bg-transparent"  />
                                                                    <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                        </svg>
                                                                    </button>
                                                                    <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="md:col-span-1">
                                                                <input  placeholder="Zip Code" readOnly className="cursor-not-allowed text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 dark:focus:bg-gray-800 focus:outline-none" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-4" />
                                                <div className="flex flex-row-reverse p-3">
                                                    <div className="flex-initial pl-3">
                                                        <button onClick={()=>window.my_modal_5.showModal()} type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                                <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                                                                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                                                            </svg>
                                                            <span className="pl-2 mx-1">Save</span>
                                                        </button>
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <dialog id="my_modal_5" className="modal p-2">
                    <form method="dialog" className="w-full m-2 xs:w-[300px] rounded-lg px-2 py-2 bg-white">
                        <h3 className="font-bold text-lg">Masukan password!</h3>
                        <div className="md:col-span-5">
                            <input value={oldPassword} type={showPassword ? 'text' : 'password'} onChange={handleOldPasswordChange} placeholder="Old Password" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                        </div>
                        {errorMessages.password && <small style={{ color: 'red' }}>{errorMessages.password}</small>}
                        
                        <div className="md:col-span-5 mb-2">
                            <div className="inline-flex items-center">
                            <input 
                                id='showPass'
                                checked={showPassword}
                                onChange={toggleShowPassword}
                                type="checkbox" 
                                className="form-checkbox" 
                            />
                            <label htmlFor='showPass' className="ml-2"><small>Show/HIde</small></label>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className="">
                                <button className="px-3 py-1 rounded hover:bg-yellow-600 bg-yellow-400">Cancel</button>
                            </div>
                            <div className=" ml-2">
                                <button onClick={handleUpdateUser} className="px-3 py-1 rounded hover:bg-red-600 bg-red-400">Yes</button>
                            </div>
                        </div>
                    </form>
                </dialog>
            </div>
        </Layout>
        )
    }


export default ProfilePage;