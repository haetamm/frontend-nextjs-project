import Image from "next/image";
import Link from "next/link";
import { sponsorLinks } from "../../../utils/links";

const SponsorComp = () => {
  return (
    <section className="bg-slate-350 dark:bg-gray-900 mt-[3rem] mb-[2rem]">
      <div className="max-w-screen-xl px-4 pb-4 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 xs:grid-cols-3 md:grid-cols-5 dark:text-gray-400">
          {sponsorLinks.map((icon, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center lg:justify-center"
            >
              <Image
                priority
                src={icon.src}
                className="hover:text-gray-900 dark:hover:text-white"
                width={icon.width}
                height={icon.height}
                alt="default"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorComp;
