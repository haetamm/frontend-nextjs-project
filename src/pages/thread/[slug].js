import { useContext, useState, useEffect } from 'react';
import { AiFillSetting, AiFillLike } from 'react-icons/ai';
import { BsFillChatTextFill } from 'react-icons/bs';
import Layout from '../../../components/layout';
import AuthContext from '../../../utils/AuthContext';
import SideBarUser from '../../../components/home/SideBarUser';
import FormCommentComp from '../../../components/thread/FormCommentComp';
import endpoint from '../../../utils/api-endpoint';
import { formatDate, getInitialLikeColor, getOverview } from '../../../utils/articleHelper';
import ReactHtmlParser from 'html-react-parser';
import Image from 'next/image';
import NotFoundComp from '../../../components/thread/NotFoundComp';
import Link from 'next/link';

const DetailPage = ({ data }) => {
  const siteTitle = data ? `${getOverview(data.title)} | The North` : 'not found';
  const siteDescription = data ? ReactHtmlParser(getOverview(data.body)) : 'not found';
  const { loggedIn } = useContext(AuthContext);
  const [likesCount, setLikesCount] = useState(data?.likes.length || 0);
  const [likeColor, setLikeColor] = useState('text-gray-500');

  useEffect(() => {
    if (loggedIn) {
      const initialLikeColor = getInitialLikeColor(data, loggedIn);
      setLikeColor(initialLikeColor);
    }
  }, [data, loggedIn]);

  const handleLikeThread = async (e, threadId) => {
    try {
      e.stopPropagation();
      const response = await endpoint.post(`likes/${threadId}`);
      setLikesCount(response.data.likeCount);
      toggleLikeColor();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLikeColor = () => {
    setLikeColor((prevColor) => (prevColor === 'text-red-500' ? 'text-gray-500' : 'text-red-500'));
  };

  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200">
            {data ? (
              <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                      <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <Image
                          priority
                          src="/image/noimage.png"
                          className="mr-4 w-16 h-16 rounded-full"
                          height={60}
                          width={60}
                          alt="dafault"
                        />
                        <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                            {data.user.username}
                          </a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">
                            <small>{formatDate(data.updated_at)}</small>
                          </p>
                        </div>
                      </div>
                    </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
                  </header>

                  <hr className="border-gray-300" />
                  <div className="flex items-center justify-between px-4 py-6 overflow-hidden">
                    <span className="text-md font-medium text-blue-600 uppercase">Web Programming</span>
                    
                    <div className="flex flex-row items-center">
                      <div className="text-md font-medium text-gray-500 flex flex-row items-center mr-5 cursor-pointer">
                        <BsFillChatTextFill className='w-4 h-4 mr-1' />
                        <span>{data.comments.length}</span>
                      </div>

                      <div
                        onClick={loggedIn ? (event) => handleLikeThread(event, data.id) : undefined}
                        className={`text-md font-medium flex flex-row items-center cursor-pointer mr-5 ${likeColor}`}
                      >
                        <AiFillLike className='w-4 h-4 mr-1' />
                        <span>{likesCount}</span>
                      </div>
                      <div className="dropdown dropdown-left cursor-pointer">
                          <div tabIndex={0} 
                              className="text-md font-medium text-gray-500 flex flex-row items-center select-none">
                              <AiFillSetting className='h-5 w-5' />
                          </div>
                          { loggedIn && data.user.id === loggedIn.user?.id &&
                              <ul tabIndex={0} className="dropdown-content mr-2 menu p-1 shadow bg-base-100 rounded-md w-[7rem]">
                                  <li><Link href={`/update/${data.slug}`}>Edit Thread</Link></li>
                              </ul>
                          }
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-300 mb-8" />

                  <div className="flex justify-center mb-4">
                    <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
                  </div>
                  <div className="whitespace-pre-wrap break-words">
                    {ReactHtmlParser(data.body)}
                  </div>
                  <FormCommentComp threadId={data.id} loggedIn={loggedIn}/>
                </article>
              </div>
            ) : (
                <div className='font bold'>
                  <NotFoundComp />
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
