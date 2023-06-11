import Link from "next/link";
import { IoMdFingerPrint } from 'react-icons/io';
import { GiPadlockOpen } from 'react-icons/gi';

const FormComp = ({ namePage, isFormValid, showPassword, formData, errorMessages, handleInputChange, toggleShowPassword, bgColor, handleSubmit }) => {
    return (
    <div className={`flex md:w-1/2 shadow-3xl justify-center py-10 items-center border-l-4 border-dashed ${bgColor} rounded-lg`}>
        <form className={bgColor} onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">{ namePage === 'Sign Up' ? 'Squy register' :'Squy login'}</p>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-0">
                <IoMdFingerPrint className='h-5 w-5 text-gray-400'/>
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
                <GiPadlockOpen className="h-5 w-5 text-gray-400" />
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

            <button type="submit" disabled={!isFormValid} className={`${!isFormValid ? 'select-none': 'cursor-pointer' }block w-full bg-indigo-600 mt-2 py-2 rounded-2xl text-white font-semibold mb-2`}>{namePage}</button>
            { namePage === 'Sign Up' ? (
                <span className="text-sm ml-2">
                    Have an account already? 
                    <Link href={'/guest/login'} className='hover:text-blue-500 cursor-pointer'> Sign In</Link>
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