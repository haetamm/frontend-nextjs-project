import { useEffect } from "react";
import { useTextarea } from "../../../utils/articleHelper";
import useThreadStore from "@/store/thread";
import CommentComp from "./CommentComp";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaComment } from "../../../utils/validation";
import useUserStore from "@/store/user";

const FormCommentComp = ({ threadId }) => {
  const { comments, addComment, loadingComment } = useThreadStore();
  const { token } = useUserStore();
  const {
    textareaRef,
    textareaValue,
    handleTextareaChange,
    setTextareaValue,
    adjustTextareaHeight,
  } = useTextarea();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    resolver: zodResolver(schemaComment),
    mode: "onChange",
  });

  useEffect(() => {
    adjustTextareaHeight();
  }, [adjustTextareaHeight]);

  const onSubmit = async (formData) => {
    if (token) {
      addComment(threadId, formData, setError, setTextareaValue);
    }
  };

  return (
    <section className="not-format mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion ({comments.length})
        </h2>
      </div>
      <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>

          <Controller
            name="comentar"
            control={control}
            render={({ field }) => (
              <textarea
                ref={textareaRef}
                value={textareaValue}
                onChange={(e) => {
                  handleTextareaChange(e);
                  field.onChange(e.target.value);
                }}
                style={{ resize: "none", overflow: "hidden" }}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:outline-none focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
              />
            )}
          />
        </div>
        {errors.comentar && (
          <p className="text-red-500 text-sm">{errors.comentar.message}</p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className={`cursor-pointer select-none ${
              isValid ? "bg-blue-600 text-white" : "bg-blue-300 text-black"
            } items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg disabled:cursor-not-allowed`}
          >
            {loadingComment ? "Loading" : "Komentar"}
          </button>
        </div>
      </form>
      <CommentComp threadId={threadId} />
    </section>
  );
};

export default FormCommentComp;
