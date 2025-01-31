import { BsThreeDots, BsChatText } from "react-icons/bs";
import Image from "next/image";
import useUserStore from "@/store/user";
import useThreadStore from "@/store/thread";
import { useModalStore } from "@/store/modal";

const CommentComp = ({ threadId }) => {
  const { token, username } = useUserStore();
  const { comments } = useThreadStore();
  const { openModalDeleteComment } = useModalStore();

  return (
    <>
      {comments && comments.length > 0 ? (
        <>
          {comments.map((comment, index) => (
            <article
              key={index}
              className="p-6 mb-6 text-base bg-white rounded-lg"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <Image
                      priority
                      src="/image/noimage.png"
                      className="mr-2 w-6 h-6 rounded-full"
                      height={60}
                      width={60}
                      alt="dafault"
                    />
                    {comment.user.username}
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>{new Date(comment.created_at).diffforHumans()}</p>
                  </div>
                </div>

                <div className="dropdown dropdown-left">
                  <button
                    className="inline-flex cursor-pointer items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-0 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <BsThreeDots className="h-5 w-5" />
                  </button>
                  {token && comment.user.username === username && (
                    <>
                      <ul
                        onClick={() => {
                          openModalDeleteComment(threadId, comment.id);
                        }}
                        tabIndex={0}
                        className="dropdown-content mr-2 menu p-1 shadow bg-base-100 rounded-md w-[7rem]"
                      >
                        <li>
                          <a>Hapus</a>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </footer>
              <div className="whitespace-pre-wrap break-words">
                {comment.comentar}
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-md text-black"
                >
                  <BsChatText className="mr-1 w-4 h-4" />
                  Reply
                </button>
              </div>
            </article>
          ))}
        </>
      ) : (
        <p>Belum ada komentar</p>
      )}
    </>
  );
};

export default CommentComp;
