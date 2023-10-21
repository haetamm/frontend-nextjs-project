import { useState, useEffect } from "react";
import endpoint from '../../utils/api-endpoint';
import { toast } from "react-toastify";
import { useForm } from "../../utils/validationUser";
import CommentComp from "./CommentComp";
import { useTextarea } from "../../utils/articleHelper";


const FormCommentComp = ({ loggedIn, threadId }) => {
    const { errorMessages, setErrorMessages, handleErrorResponse } = useForm();
    const [comments, setComments] = useState([]);
    const { textareaRef, textareaValue, handleTextareaChange, setTextareaValue, adjustTextareaHeight } = useTextarea();
  
    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await endpoint.get(`comments/${threadId}`);
                setComments(response.data.comments);
            } catch(error) {
                console.log(error);
            }
        }
        getComments();
    },[threadId]);

    useEffect(() => {
        adjustTextareaHeight();
    }, [adjustTextareaHeight]);
      

    const handleComment = async (e) => {
        e.preventDefault();
        try {
            const response = await endpoint.post(`comments/${threadId}`, { comentar: textareaValue});
            setComments(response.data.comments);
            setTextareaValue('');
            setErrorMessages('');
            adjustTextareaHeight();
            toast.info('komentar berhasil ditambahkan');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                handleErrorResponse(error.response.data);
            } else {
              console.error(error);
            }
        }
    }

    
    return (
        <section className="not-format mt-5">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({comments.length})</h2>
            </div>
            <form className="mb-6">
                <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white">
                    <label forhtml="comment" className="sr-only">Your comment</label>
                    <textarea 
                        ref={textareaRef}
                        value={textareaValue}
                        onChange={handleTextareaChange}
                        style={{ resize: 'none', overflow: 'hidden' }}
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:outline-none focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..." 
                        required
                    ></textarea>
                </div>
                {errorMessages.comentar && <span className='text-red-500 text-md'>{errorMessages.comentar}</span>}
                <div className="flex justify-end">
                    <div onClick={ loggedIn ? (e) => handleComment(e) : undefined}
                        className="cursor-pointer select-none bg-blue-300 items-center py-2.5 px-4 text-xs font-medium text-center text-black rounded-lg">
                        Komentar
                    </div>
                </div>
            </form>
            { comments && comments.length > 0 ? (
                <>
                    { comments.map((comment) => (
                        <CommentComp 
                            key={comment.id} 
                            comment={comment} 
                            loggedIn={loggedIn} 
                            setComments={setComments} 
                        />
                    ))}
                </>
            ) : (
                <p>Belum ada komentar</p>
            )}
        </section>
    )
}

export default FormCommentComp