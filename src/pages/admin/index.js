import { useContext, useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import StateContext from '../../../utils/StateContext';
import SideBarUser from '../../../components/home/SideBarUser';
import { useRouter } from 'next/router';
import TableUserComp from '../../../components/admin/TableUserComp';
import endpoint from '../../../utils/api-endpoint';
import Error403Comp from '../../../components/admin/Error403Comp';

const Admin = () => {
    const { loggedIn } = useContext(StateContext);
    const siteTitle = `${loggedIn?.is_admin ? 'Admin | The North' : 'Error Forbidden'}`;
    const siteDescription =
        `${loggedIn?.is_admin ? 'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?' : 'Error Forbidden'}`;

    const [users, setUsers] = useState([]);
    const router = useRouter();
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  

    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        sessionStorage.setItem('savePageAdmin', page);
        router.push(`/admin?page=${page}`)
    }

    const getUsers = async (currentPage) => {
        try {
            const response = await endpoint.get(`users?page=${currentPage}`);
            setUsers(response.data.users.users);
            setTotalPages(response.data.users.totalPages);
            setTotalCount(response.data.users.totalCount);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let currentPage;
        const savedPage = sessionStorage.getItem('savePageAdmin');
        
        if (!router.query.page) {
            currentPage = savedPage ? parseInt(savedPage) : 1;
            setCurrentPage(currentPage);
            router.replace(`admin?page=${currentPage}`);
        } else {
            currentPage = parseInt(router.query.page);
            setCurrentPage(currentPage);
        }


        getUsers(currentPage);
    }, [router, router.query.page]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };
    
    return (
        <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
            <div className="flex w-full gap-0">
                {loggedIn && <SideBarUser />}

                <div className="bg-white lg:bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto ">
                { loggedIn?.is_admin ? (
                        <section className="bg-white lg:bg-slate-200 py-6 sm:py-8">
                            <div className="mb-5">
                                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Administrator</h2>
                            </div>
                            <TableUserComp 
                                users={users} 
                                totalCount={totalCount} 
                                currentPage={currentPage}
                                handleNextPage={handleNextPage}
                                handlePrevPage={handlePrevPage}
                                handlePageChange={handlePageChange}
                                totalPages={totalPages}
                                getUsers={getUsers}
                            />
                            
                            
                        </section>
                    ) : (
                        <Error403Comp />
                    )
                }
                </div>
            </div>
        </Layout>
    )
}

export default Admin