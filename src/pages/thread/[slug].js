import { useContext } from 'react';
import Layout from '../../../components/layout';
import AuthContext from '../../../utils/AuthContext';
import SideBarUser from '../../../components/home/SideBarUser';
import FormCommentComp from '../../../components/home/FormCommentComp';
import endpoint from '../../../utils/api-endpoint';
import { formatDate } from '../../../utils/articleHelper';
import ReactHtmlParser from 'html-react-parser';
import Image from 'next/image';
import NotFoundComp from '../../../components/thread/NotFoundComp';

const DetailPage = ({ data }) => {
  const siteTitle = 'Judul | The North';
  const siteDescription =
    'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
  const { loggedIn } = useContext(AuthContext);

  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200">
              { data ? (
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                  <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                      <header className="mb-4 lg:mb-6 not-format">
                          <address className="flex items-center mb-6 not-italic">
                              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                  <Image
                                      priority
                                      src="/image/noimage.png"
                                      className='mr-4 w-16 h-16 rounded-full'
                                      height={60}
                                      width={60}
                                      alt="dafault"
                                  />
                                  <div>
                                      <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{data.user.username}</a>
                                      <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                      <p className="text-base font-light text-gray-500 dark:text-gray-400"><span>{formatDate(data.updated_at)}</span></p>
                                  </div>
                              </div>
                          </address>
                          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
                      </header>
                      <hr className="border-gray-300" />
                      <div className="flex items-center justify-between px-4 py-6 overflow-hidden">
                        <span className="text-md font-medium text-blue-600 uppercase">
                          Web Programming
                        </span>
                        <div className="flex flex-row items-center">
                          <div className="text-md font-medium text-gray-500 flex flex-row items-center mr-5 select-none" >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                            <span>1.5k</span>
                          </div>

                          <div className="text-md font-medium text-gray-500 flex flex-row items-center mr-5 cursor-pointer" >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              ></path>
                            </svg>
                            <span>{data.comments.length}</span>
                          </div>

                          <div className="text-md font-medium text-gray-500 flex flex-row items-center cursor-pointer" >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              ></path>
                            </svg>
                            <span>{data.like_count}</span>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-300 mb-8" />
                      
                      <div className='flex justify-center mb-4'>
                          <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""/>
                      </div>
                      <div className='whitespace-pre-wrap break-words'>
                        {ReactHtmlParser(data.body)}
                      </div>
                      <FormCommentComp/>
                  </article>
                </div>
                ) : (
                  <div className='font bold'>
                    <NotFoundComp/>
                  </div>
                )
              }
          </main>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const slug = params.slug;
    const response = await endpoint.get(`threads/detail/${slug}`);
    const data = response.data.thread;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        data: null,
      },
    };
  }
};


export default DetailPage;
