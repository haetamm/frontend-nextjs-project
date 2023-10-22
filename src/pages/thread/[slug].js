import { useContext, useState, useEffect, useRef } from 'react';
import { AiFillSetting, AiFillLike } from 'react-icons/ai';
import { BsFillChatTextFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
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
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ModalComp from '../../../components/utils/ModalComp';


const DetailPage = () => {
  const { loggedIn } = useContext(AuthContext);
  const targetRef = useRef(null);
  const [data, setData] = useState()
  const [likeColor, setLikeColor] = useState('text-gray-500');
  const router = useRouter();
  const { slug } = router.query;
  const [likesCount, setLikesCount] = useState(0);


  useEffect(() => {
      const getThreadBySlug = async () => {
        try {
          const response = await endpoint.get(`threads/detail/${slug}`);
          if (response) {
            setData(response.data.thread);
            if(response.data.thread && response.data.thread.likes){
              setLikesCount(response.data.thread.likes.length);
            }
          } else {
            setData(null);
          }
        } catch (error) {
          console.log(error);
        }
      }
    getThreadBySlug()
  }, [slug]);

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

  const handleDelete = async (e, threadId) => {
    try {
      e.stopPropagation();
      const response = await endpoint.delete(`threads/${threadId}`);
      toast.info(response.data.message);
      router.back();
    } catch (err) {
      console.log(err);
    }
  }

  const toggleLikeColor = () => {
    setLikeColor((prevColor) => (prevColor === 'text-red-500' ? 'text-gray-500' : 'text-red-500'));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGoBack = () => {
    router.back(); 
  };

  const scrollToSection = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const siteTitle = data ? `${getOverview(data?.title)} | The North` : 'not found';
  const siteDescription = data ? ReactHtmlParser(getOverview(data?.body)) : 'not found';
  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200">
            {data ? (
              <>
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                  <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                      <address className="flex items-center justify-between mb-6 not-italic">
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
                              {data.user?.username}
                            </a>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400">
                              <small>{formatDate(data.updated_at)}</small>
                            </p>
                          </div>
                        </div>
                        <BsFillArrowLeftCircleFill onClick={handleGoBack} className='h-12 w-12 cursor-pointer'/>
                      </address>
                      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
                    </header>

                    <hr className="border-gray-300" />
                    <div className="flex items-center justify-between px-4 py-6">
                      <span className="text-md font-medium text-blue-600 uppercase">Web Programming</span>
                      
                      <div className="flex items-center">
                        <span onClick={scrollToSection} className="text-md font-medium text-gray-500 flex flex-row items-center mr-5 cursor-pointer">
                          <BsFillChatTextFill className='w-4 h-4 mr-1' />
                          <span>{data.comments?.length}</span>
                        </span>

                        <div onClick={loggedIn ? (event) => handleLikeThread(event, data.id) : undefined}
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
                            { loggedIn && data.user?.id === loggedIn.user?.id && 
                              <>
                                <ul tabIndex={0} className="dropdown-content mr-2 mt-0 menu p-1 shadow bg-base-100 rounded-md w-[7rem]">
                                    <li><Link href={`/update/${data.slug}`}>Edit</Link></li>
                                    <li><a onClick={()=>window.my_modal_2.showModal()}>Delete</a></li>
                                </ul>
                                <ModalComp 
                                  id='my_modal_2' 
                                  title='Peringatan!' 
                                  body='Thread ini akan dihapus?' 
                                  handle={loggedIn ? (event) => handleDelete(event, data.id) : undefined}
                                />
                                
                              </>
                            }
                        </div>
                      </div>
                    </div>
                    
                    <hr className="border-gray-300 mb-8 mt-0" />

                    <div className="flex justify-center mb-4">
                      <Image
                        src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                        alt="post-image"
                        width={640}
                        height={360}
                        priority
                      />
                    </div>
                    <div className="whitespace-pre-wrap break-words">
                      {ReactHtmlParser(data.body)}
                      {/* {data.body} */}
                    </div>
                    <div ref={targetRef}>
                      <FormCommentComp threadId={data.id} loggedIn={loggedIn}/>
                    </div>
                  </article>
                </div>
                <button onClick={scrollToTop} className="hidden xs:block fixed z-90 bottom-8 right-8 border-0 w-10 h-10 rounded-full drop-shadow-md bg-black text-white text-3xl font-bold">&uarr;</button>
                            
              </>
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

// export const getServerSideProps = async ({ params }) => {
//   try {
//     const slug = params.slug;
//     const response = await endpoint.get(`threads/detail/${slug}`);
//     const data = response.data.thread;

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// };


export default DetailPage;
