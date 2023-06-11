import { useState, useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import AuthContext from '../../../utils/AuthContext';
import Layout from '../../../components/layout';
import SideBarUser from '../../../components/home/SideBarUser';
import endpoint from '../../../utils/api-endpoint';
import { useForm } from '../../../utils/validationUser';
import { toast } from 'react-toastify';

const CreateThreadPage = () => {
  const siteTitle = 'Update Thread | The North';
  const siteDescription =
    'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
  const router = useRouter();
  const { loggedIn } = useContext(AuthContext);
  const editorRef = useRef(null);
  const apiKey = 'bbdbvs8ddjjt5h08x24m74ubtouze5yhchljru4lflryii9q';
  const { threadSlug } = router.query;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [threadId, setThreadId] = useState('');
  const { errorMessages, setErrorMessages, handleErrorResponse } = useForm();


  useEffect(() => {
    const getThread = async () => {
      try {
        const response = await endpoint.get(`threads/${threadSlug}`);
        setTitle(response.data.thread.title);
        setBody(response.data.thread.body);
        setThreadId(response.data.thread.id);
      } catch (error) {
        console.log(error);
      }
    };

    if (threadSlug) {
      getThread();
    }
  }, [threadSlug]);

  const handleSubmit = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const strippedContent = content.replace(/<[^>]+>/g, ''); // Menghapus semua tag HTML dari konten
      const trimmedContent = strippedContent.trim(); // Menghapus spasi di awal dan akhir konten
  
      const hasNonWhitespace = /[^\s|&nbsp;]/.test(strippedContent);
      if (!hasNonWhitespace) {
        toast.error('Konten tidak boleh hanya berisi spasi');
        return;
      }
  
      console.log('Content:', trimmedContent);
    }

    try {
      await endpoint.put(`threads/${threadId}`, { title, body });
      setTitle('');
      setBody('');
      setErrorMessages({
        title: '',
        body: ''
      });
      toast.info('Thread telah berhasil diupdate');
      router.push(`/thread/${threadSlug}`);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            handleErrorResponse(error.response.data);
        } else {
          console.error(error);
        }
    }
  };

  useEffect(() => {
    if (!loggedIn || null) {
      router.push('/guest/login');
    }
  }, [loggedIn, router]);

  const editorId = useRef(`tiny-react_${Math.random().toString(36).substring(2)}`);


  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <section className="bg-slate-200 py-4">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Update Thread</h2>
              <div className="mb-4">
                <label htmlforhtml="title" className="block mb-2 font-medium text-gray-700">
                  Title: {errorMessages.title && <span className='text-red-500 text-md'>{errorMessages.title}</span>}
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlforhtml="body" className="block mb-2 font-medium text-gray-700">
                Content: {errorMessages.body && <span className='text-red-500 text-md'>{errorMessages.body}</span>}
                </label>
                <Editor
                  apiKey={apiKey}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'code',
                      'fullscreen',
                      'insertdateTime',
                      'media',
                      'table',
                      'code',
                      'help',
                      'wordcount',
                    ],
                    toolbar:
                      'undo redo | blocks | bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                  id={editorId.current}
                  value={body} 
                  onEditorChange={trimmedContent => setBody(trimmedContent)}
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-hover"
              >
                Update
              </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CreateThreadPage;
