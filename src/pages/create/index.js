import { useState, useContext, useRef } from 'react';
import StateContext from '../../../utils/StateContext';
import Layout from '../../../components/layout';
import SideBarUser from '../../../components/home/SideBarUser';
import endpoint from '../../../utils/api-endpoint';
import { useForm } from '../../../utils/validationUser';
import { toast } from 'react-toastify';
import NotifComp from '../../../components/thread/NotifComp';
import { validateContent } from '../../../utils/articleHelper';
import FormEditorComp from '../../../components/thread/ThreadEditorComp';
import FormInputTitleComp from '../../../components/thread/FormInputTitleComp';

const CreateThreadPage = () => {
  const siteTitle = 'Add Thread | The North';
  const siteDescription =
    'Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?';
  
  const { loggedIn } = useContext(StateContext);
  const editorRef = useRef(null);

  const [notif, setNotif] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { errorMessages, setErrorMessages, handleErrorResponse } = useForm();

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
      const response = await endpoint.post('threads', { title, body });
      setNotif(response.data.addedThread.slug);
      setTitle('');
      setBody('');
      setErrorMessages({
        title: '',
        body: ''
      });
      toast.info('Thread telah berhasil diposting');
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            handleErrorResponse(error.response.data);
        } else {
          console.error(error);
        }
    }
  };


  return (
    <Layout guest={!loggedIn} siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        {loggedIn && <SideBarUser />}

        <div className="bg-slate-200 rounded-none xs:rounded-tl-[10rem] xs:rounded-tr-[10rem] hover-animation flex min-h-screen w-full max-w-full flex-col mx-auto border-x-0 border-light-border pb-[18rem] dark:border-dark-border xs:border-x">
          <section className="bg-slate-200 py-4">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Add Thread</h2>
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
                editorRef={editorRef}
                value={body}
                onChange={trimmedContent => setBody(trimmedContent)}
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-hover"
              >
                Submit
              </button>
            </div>
          </section>
          { notif !== '' && 
            <NotifComp notif={notif} />
          }
        </div>
      </div>
    </Layout>
  );
};

export default CreateThreadPage;
