import { useState, useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../../utils/AuthContext';
import Layout from '../../../components/layout';
import SideBarUser from '../../../components/home/SideBarUser';
import endpoint from '../../../utils/api-endpoint';
import { useForm } from '../../../utils/validationUser';
import { toast } from 'react-toastify';
import { validateContent } from '../../../utils/articleHelper';
import FormEditorComp from '../../../components/thread/ThreadEditorComp';
import FormInputTitleComp from '../../../components/thread/FormInputTitleComp';

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
      const { valid, error, trimmedContent } = validateContent(content);
      
      if (!valid) {
        toast.error(error);
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


  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <section className="bg-slate-200 py-4">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Update Thread</h2>
              <FormInputTitleComp
                label="Title:"
                id="title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                error={errorMessages.title}
              />
              <FormEditorComp
                label="Content:"
                id="body"
                error={errorMessages.body}
                apiKey={apiKey}
                editorRef={editorRef}
                value={body}
                onChange={trimmedContent => setBody(trimmedContent)}
              />
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
