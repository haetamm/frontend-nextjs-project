import { GiWorld } from "react-icons/gi";
import Image from "next/image";
import { downloadLinks, footerLinks } from "../../../utils/links";
import useUserStore from "@/store/user";

const FooterComp = ({ guest }) => {
  const { token } = useUserStore();
  return (
    <>
      {!token || guest ? (
        <div className={` relative mt-2 bg-blue-300 `}>
          <svg
            className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-blue-300"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
          >
            <path
              fill="currentColor"
              d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            />
          </svg>
          <div className="mt-0 bg-blue-300 select-none">
            <div className="max-w-2xl mx-auto text-white pt-8 pb-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <h3 className="text-3xl mb-3 mr-1">Download our North app</h3>
                  <GiWorld size={44} className="hidden sm:block" />
                </div>
                <p>Stay fit. All day, every day.</p>
                <div className="flex justify-center my-10">
                  {downloadLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center border w-auto rounded-lg px-2 py-1 mx-2"
                    >
                      <Image
                        src={link.src}
                        alt={link.alt}
                        className="w-7 md:w-8"
                        width={44}
                        height={44}
                      />
                      <div className="text-left ml-3">
                        <p className="text-xs text-gray-200">Download on</p>
                        <p className="text-sm md:text-base">{link.store}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-18 flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
                <p className="order-2 md:order-1 mt-8 md:mt-0">
                  &copy; Beautiful Footer, 2021.
                </p>
                <div className="order-1 md:order-2">
                  {footerLinks.map((link, index) => (
                    <a key={index} href={link.url} className="px-2">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FooterComp;
