import Layout from '../../../components/layout';
import { useContext } from 'react';
import AuthContext from '../../../utils/AuthContext';
import SideBarUser from '../../../components/home/SideBarUser';


const DetailThread = () => {
    const siteTitle='Detail Threads';
    const siteDescription = 'hallo';
    const { loggedIn } = useContext(AuthContext);
    return (
        <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
            <div className="flex w-full justify-center gap-0">
            {loggedIn && <SideBarUser />}
    
            <div className="bg-white rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
                <section className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Detail Thread</h2>
                    </div>
                </div>
                </section>
            </div>
            </div>
        </Layout>
    )
}

export default DetailThread