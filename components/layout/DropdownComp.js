import { CgProfile } from 'react-icons/cg';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import Link from 'next/link';

const DropdownComp = () => {
  return (
    <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16">
        <Link href={'/profile'} className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            <div className="focus:underline focus:text-indigo-700 focus:outline-none flex items-center">
                <CgProfile />
                <span className="ml-2">My Profile</span>
            </div>
        </Link>
        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
            <a href="#" className="focus:underline focus:text-indigo-700 focus:outline-none flex items-center">
                <IoIosHelpCircleOutline />
                <span className="ml-2">Help Center</span>
            </a>
        </li>
        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <a href="#" className="focus:underline focus:text-indigo-700 focus:outline-none flex items-center">
                <CiSettings />
                <span className="ml-2">Account Settings</span>
            </a>
        </li>
    </ul>
  )
}

export default DropdownComp