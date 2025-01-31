import { GiWorld } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "../../../utils/links";
import { isActive } from "../../../utils/helper";
import useScroll from "@/hooks/useScroll";
import ToggleSidebar from "./ToggleSidebar";
import useUserStore from "@/store/user";

const NavLink = ({ href, icon: Icon, label }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      prefetch={true}
      className={`${
        isActive(pathname, href)
          ? "text-indigo-700 border-b-2 border-indigo-700"
          : "border-transparent"
      } flex px-5 items-center py-2 text-sm leading-5 text-black hover:shadow-md focus:outline-none transition duration-150 ease-in-out`}
    >
      <span className="mr-2">
        <Icon className="lg:h-8 lg:w-8" />
      </span>
      {label}
    </Link>
  );
};

const GuestNavbar = ({ guest }) => {
  const { visible, transparent } = useScroll();
  const { token } = useUserStore();

  return (
    <>
      {!token || guest ? (
        <div
          className={`  ${
            visible ? "navbarCustom--visible" : "navbarCustom--hidden"
          } ${
            transparent
              ? "bg-black/20 backdrop-blur-sm  md:bg-transparent"
              : "bg-black/10 backdrop-blur-sm  shadow-lg"
          } 
      w-full hidden md:flex justify-center z-10 fixed py-1.5 transition-shadow duration-300`}
        >
          <div className="kontener ">
            <div className="mx-auto w-full px-1 md:px-3 lg:px-4 py-0 block">
              <div className="md:flex md:items-center md:justify-between justify-end">
                <Link
                  href={"/"}
                  prefetch={true}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md hidden md:flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start"
                >
                  <div className="flex items-center">
                    <GiWorld size={44} />
                    <h2 className="hidden xl:block text-3xl text-black font-bold leading-normal px-3">
                      The North
                    </h2>
                  </div>
                </Link>
                <div className="flex justify-end">
                  <div className="hidden md:flex md:mr-2 xl:mr-16">
                    {navLinks.map((link, index) => (
                      <NavLink key={index} {...link} />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <ToggleSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GuestNavbar;
