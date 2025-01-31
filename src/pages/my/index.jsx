import React from "react";
import { useEffect } from "react";
import Layout from "../../components/layout/index";
import ArticleComp from "../../components/home/ArticleComp";
import SideBarUser from "../../components/layout/SideBarUser";
import useThreadStore from "@/store/thread";
import Loader from "@/components/layout/Loader";
import Pagination from "@/components/layout/Pagination";
import { useRouter } from "next/router";
import NavThreadPage from "@/components/thread/NavThreadPage";

const MyThreadPage = () => {
  const {
    loading,
    myThreads,
    fetchMyThread,
    setCurrentPage,
    currentPage,
    totalPages,
  } = useThreadStore();
  const siteTitle = "My Thread | The North";
  const siteDescription =
    "Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?";

  const router = useRouter();
  const page = Number(router.query.page) || 1;
  useEffect(() => {
    setCurrentPage(page);
    fetchMyThread(page);
  }, [fetchMyThread, page, setCurrentPage]);

  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0 mt-6 md:mt-[-30px]">
        <>
          <SideBarUser />
          <div className="bg-slate-200 hover-animation flex w-full max-w-full flex-col mx-auto pb-16 md:pb-0">
            <section className="bg-slate-200">
              <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mb-5 md:mb-10 mt-0">
                  <NavThreadPage />
                  <div className="bg-white shadow min-h-[calc(100vh-160px)] border border-gray-100 p-8 text-gray-700 rounded-lg -mt-2">
                    {loading ? (
                      <div className="w-full mt-10 min-h-[calc(100vh-300px)]">
                        <Loader />
                      </div>
                    ) : (
                      <div className="grid gap-8  sm:grid-cols-2 min-h-[calc(100vh-300px)] sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                        {myThreads && myThreads.length > 0 ? (
                          <>
                            <ArticleComp threads={myThreads} />
                          </>
                        ) : (
                          <p>No data available</p>
                        )}
                      </div>
                    )}
                    <div className="mt-10">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      </div>
    </Layout>
  );
};

export default MyThreadPage;
