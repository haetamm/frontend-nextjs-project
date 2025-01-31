import useThreadStore from "@/store/thread";
import useUserStore from "@/store/user";
import React from "react";
import { AiFillLike } from "react-icons/ai";

const ButtonLike = ({ liked, like_count, id }) => {
  const { likeThread } = useThreadStore();
  const { token } = useUserStore();

  const handleLike = () => {
    if (token) {
      likeThread(id);
    }
  };

  return (
    <>
      <div className="text-md font-medium text-gray-500 flex flex-row items-center mr-5 cursor-pointer">
        <AiFillLike
          onClick={handleLike}
          className={`${!liked ? "" : "text-red-500"} w-4 h-4 mr-1`}
        />
        <span>{like_count}</span>
      </div>
    </>
  );
};

export default ButtonLike;
