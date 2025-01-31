import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatTextFill } from "react-icons/bs";
import {
  formatDate,
  isoToWIB,
  getOverview,
} from "../../../utils/articleHelper";
import ReactHtmlParser from "html-react-parser";
import ButtonLike from "../layout/ButtonLike";

const ArticleComp = ({ threads }) => {
  return (
    threads.length > 0 &&
    threads.map((post, index) => (
      <div key={index}>
        <article className="flex flex-col gap-4 lg:flex-row lg:gap-6 text-black">
          <div className="group block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-40 lg:w-40">
            <Image
              priority
              src="/image/notfound.png"
              width={80}
              height={80}
              alt="default"
              className="static inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <h2 className="text-xl font-bold text-gray-800">
              <Link
                href={`/thread/${post?.slug}`}
                className="transition duration-100 text-2xl hover:text-rose-500 active:text-rose-600"
              >
                {getOverview(post?.title)}
              </Link>
            </h2>
            <small className="select-none text-black custom-button main-tab dark-bg-tab group relative pointer hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20">
              by {post?.user.username} |{" "}
              {new Date(post?.created_at).diffforHumans()}
              <div className="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                <div>
                  {formatDate(post?.created_at)}, {isoToWIB(post?.created_at)}
                </div>
              </div>
            </small>

            <div className="flex justify-start">
              <div className="text-md font-medium text-gray-500 flex flex-row items-center mr-5 cursor-pointer">
                <BsFillChatTextFill className="w-3 h-3 mr-1" />
                <div>{post?.comment_count}</div>
              </div>
              <ButtonLike
                liked={post?.liked}
                like_count={post?.like_count}
                id={post?.id}
              />
            </div>

            <div className="text-black whitespace-pre-wrap break-words">
              {ReactHtmlParser(getOverview(post?.body))}
            </div>

            <Link
              href={`/thread/${post?.slug}`}
              className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700 mr-1"
            >
              Read more
            </Link>
          </div>
        </article>
      </div>
    ))
  );
};

export default ArticleComp;
