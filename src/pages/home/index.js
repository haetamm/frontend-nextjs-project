import { useContext } from 'react';
import Layout from '../../../components/layout';
import endpoint from '../../../utils/api-endpoint';
import AuthContext from '../../../utils/AuthContext';
import ArticleComp from '../../../components/home/ArticleComp';
import SideBarUser from '../../../components/home/SideBarUser';
import usePagination from '../../../utils/usePagination';

const HomePage = ({ data, totalPages }) => {
  const siteTitle = 'Home | The North';
  const siteDescription =
    'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
  const { loggedIn } = useContext(AuthContext);
  const route = '/home';
  const { renderPagination } = usePagination(totalPages, route);

  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <section className="bg-slate-200 py-6 sm:py-8">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <div className="mb-10 md:mb-20">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
              </div>
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
          </section>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const page = query.page || 1;
    const response = await endpoint.get(`threads?page=${page}`);
    const data = response.data.threads.threads;
    console.log(data)
    const totalPages = response.data.threads.totalPages;

    return {
      props: {
        data,
        totalPages,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        data: [],
        totalPages: 1,
      },
    };
  }
};

export default HomePage;
