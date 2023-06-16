import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from 'react';
import AuthContext from "../../utils/AuthContext";


const NavUserPageComp = () => {
    const router = useRouter();
    const { username } = router.query;
    const { loggedIn } = useContext(AuthContext);
    const classActive = "bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-gray-100";

    return (
        <ul className="grid grid-flow-col text-center text-gray-500  p-1">    
            <Link href={{ pathname: `/${loggedIn?.user?.username}` }}>
                <div href="#page1" className={`${router.pathname == '/[username]' ? classActive : '' } flex justify-center py-4`}>My Thread</div>    
            </Link>    
            <Link href={{ pathname: `/${username}/likes`, query: { page: 1 } }}>
                <div className={`${router.pathname === `/[username]/likes` ? classActive : ''} flex justify-center py-4`}>
                    My Likes
                </div>
            </Link>
    
        </ul> 
    )
}

export default NavUserPageComp;