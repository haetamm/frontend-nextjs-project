import Image from "next/image";
import Link from "next/link";
import { linksInGuest } from "../../../utils/links";

const WelcomeComp = () => {
  return (
    <section className="bg-slate-350 dark:bg-gray-900 md:mt-5">
      <div className="grid max-w-screen-xl px-4 pt-7 md:pt-10 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-5 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Building digital <span>products & brands.</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This free and open-source landing page template was built using the
            utility classes from{" "}
            <Link href="https://tailwindcss.com" className="hover:underline">
              Tailwind CSS
            </Link>{" "}
            and based on the components from the{" "}
            <Link
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="hover:underline"
            >
              Flowbite Library
            </Link>{" "}
            and the{" "}
            <Link
              href="https://flowbite.com/blocks/"
              className="hover:underline"
            >
              Blocks System
            </Link>
            .
          </p>
          <div className=" space-y-2 xs:flex xs:space-y-0 sm:space-x-4">
            {linksInGuest.map(({ href, icon: Icon, label }, index) => (
              <Link
                key={index}
                href={href}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-gray-900 bg-white lg:bg-gray-200 border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <Icon className="h-5 w-5 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            priority
            src="/image/hero.png"
            height={600}
            width={600}
            alt="default"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeComp;
