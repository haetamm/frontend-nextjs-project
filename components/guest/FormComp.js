import Link from "next/link";

const FormComp = ({ namePage, isFormValid, showPassword, formData, errorMessages, handleInputChange, toggleShowPassword, bgColor, handleSubmit }) => {
  return (
    <div className={`flex md:w-1/2 shadow-3xl justify-center py-10 items-center border-l-4 border-dashed ${bgColor} rounded-lg`}>
        <form className={bgColor} onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Squy Register</p>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <input className="pl-2 outline-none border-none bg-transparent" 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
            </div>
            <div className='mb-2 ml-3'>
                {errorMessages.username && <small className='text-red-500'>{errorMessages.username}</small>}
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd" />
                </svg>
                <input className="pl-2 outline-none border-none bg-transparent" 
                    type={showPassword ? 'text' : 'password'}
                    name="password" 
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange} 
                />
            </div>
            <div className='mb-2 ml-3'>
                {errorMessages.password && <small style={{ color: 'red' }}>{errorMessages.password}</small>}
            </div>
            <label className="flex items-center mt-0 mb-2 ml-3">
                <input
                type="checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
                className="h-3 w-3 text-indigo-600"
                />
                <span className="ml-1 text-gray-400">Show Password</span>
            </label>

            <button type="submit" disabled={!isFormValid} className="block w-full bg-indigo-600 mt-2 py-2 rounded-2xl text-white font-semibold mb-2">{namePage}</button>
            { namePage === 'Register' ? (
                <span className="text-sm ml-2">
                    Have an account already? 
                    <Link href={'/guest/login'} className='hover:text-blue-500 cursor-pointer'> Login</Link>
                </span>
                ) : (
                <span className="text-sm ml-2">
                    Don&apos;t have an account? 
                    <Link href={'/guest/register'} className='hover:text-blue-500 cursor-pointer'> Sign up</Link>
                </span>
            )}

        </form>
    </div>
  )
}

export default FormComp;