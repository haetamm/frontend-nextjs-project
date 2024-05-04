import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import StateContext from '../../../utils/StateContext';
import Layout from '../../../components/layout';
import SideBarUser from '../../../components/home/SideBarUser';
import endpoint from '../../../utils/api-endpoint';
import ArticleComp from '../../../components/home/ArticleComp';
import usePagination from '../../../utils/usePagination';
import NavUserPageComp from '../../../components/user/NavUserComp';


const MyLikeThreadPage = () => {
    const siteTitle = 'My Likes | The North';
    const siteDescription =
        'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
    const router = useRouter();
    const [data, setData] = useState([]);
    const { loggedIn, authReady } = useContext(StateContext);
    const { username, page } = router.query;
    const [totalPages, setTotalPages] = useState(0);
    const { renderPagination } = usePagination(totalPages, `/${loggedIn ? `${loggedIn.user?.username}/likes` : undefined}`);


    useEffect(() => {
      if (authReady && !loggedIn) {
          router.push('/guest/login');
      }
    }, [authReady, loggedIn, router]);

    useEffect(() => {
        const getThread = async () => {
          try {
            const response = await endpoint.get(`threads/by/${loggedIn?.user?.username}/likes?page=${page}`);
            // console.log(response.data.threads);
            setData(response.data.threads.threads);
            setTotalPages(response.data.threads.totalPages);
          } catch (error) {
            console.log(error);
          }
        };
    
        if (loggedIn?.user?.username) {
            getThread();
          }
    }, [loggedIn?.user?.username, page]);

   

    return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {/* {loggedIn && <SideBarUser />} */}

        {loggedIn ? (
            <>
              <SideBarUser />
              <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
                <section className="bg-slate-200 py-4">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="mb-5 md:mb-10 mt-10 md:mt-5">
                      <NavUserPageComp />
                      <div className="bg-white shadow border border-gray-100 p-8 text-gray-700 rounded-lg -mt-2">
                        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                          { data && data.length > 0 ? (
                            <>
                              {data.map((post) => (
                                <ArticleComp key={post.id} post={post} />
                              ))}
                            </>
                          ) : (
                            <p>No data available</p>
                          )}
                        </div>
                        {data && data.length > 0 ? (
                          <>
                            { renderPagination() }                  
                          </>
                        ) : null}

                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          ) : (
              <div className="h-screen"></div>
        )}
      </div>
    </Layout>
    )
}


export default MyLikeThreadPage;