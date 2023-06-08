import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, isoToWIB } from '../../utils/timeSetting';

const ArticleComp = ({ post }) => {
    return (
        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link href={`/home/${post.slug}`} className="group block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <Image 
                    priority
                    src="/image/notfound.png" 
                    width={80} 
                    height={80}
                    alt="default" 
                    className="static inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                />
            </Link>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">{formatDate(post.updated_at)} | {isoToWIB(post.updated_at)}</span>

                <h2 className="text-xl font-bold text-gray-800">
                    <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">{post.title}</a>
                </h2>

                <p className="text-gray-500">{post.body}</p>

                <div>
                    <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                </div>
            </div>
        </article>
    )
}

export default ArticleComp