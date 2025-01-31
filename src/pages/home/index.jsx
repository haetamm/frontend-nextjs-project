import { useEffect } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import useUserStore from "@/store/user";
import SideBarUser from "../../components/layout/SideBarUser";
import useThreadStore from "@/store/thread";
import ArticleComp from "@/components/home/ArticleComp";
import Loader from "@/components/layout/Loader";
import Pagination from "@/components/layout/Pagination";

const HomePage = () => {
  const { token } = useUserStore();
  const {
    loading,
    threads,
    fetchThread,
    setCurrentPage,
    currentPage,
    totalPages,
  } = useThreadStore();

  const router = useRouter();
  const page = Number(router.query.page) || 1;

  useEffect(() => {
    setCurrentPage(page);
    fetchThread(page);
  }, [fetchThread, page, setCurrentPage]);

  return (
    <Layout siteTitle="Home | The North" siteDescription="Some description">
      <div
        className={`${
          !token ? "mt-6" : "mt-6 md:mt-[-30px]"
        } flex w-full justify-center gap-0`}
      >
        <SideBarUser />
        <div className="bg-slate-200 rounded-none hover-animation flex h-full w-full max-w-full flex-col mx-auto pb-24">
          <section className="bg-slate-200">
            <div className="mx-auto max-w-screen-xl min-h-[calc(100vh-160px)] px-4 md:px-8">
              <div className="mb-6 md:mb-10">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Most Recent Posts
                </h2>
              </div>
              {loading ? (
                <div className="w-full mt-10">
                  <Loader />
                </div>
              ) : (
                <div
                  className={`${
                    !token ? "xl:grid-cols-3" : ""
                  } grid gap-8 xs:grid-cols-2 xs:gap-16 xl:gap-16`}
                >
                  {threads && threads.length > 0 ? (
                    <ArticleComp threads={threads} />
                  ) : (
                    <p>No data available</p>
                  )}
                </div>
              )}
            </div>
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

//  metode server side rendering
// export const getServerSideProps = async ({ query }) => {
//   try {
//     const page = query.page || 1;
//     const response = await endpoint.get(`threads?page=${page}`);
//     const data = response.data.threads.threads;
//     const totalPages = response.data.threads.totalPages;

//     return {
//       props: {
//         data,
//         totalPages,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return {
//       props: {
//         data: [],
//         totalPages: 1,
//       },
//     };
//   }
// };

export default HomePage;
