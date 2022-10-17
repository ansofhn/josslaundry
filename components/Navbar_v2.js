import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo-navbar.png";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Navbar_v2 = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-white md:border-b md:border-gray-100">
        <div className="container flex flex-wrap items-center justify-between mx-auto sm:ml-0">
          <Link href={"/"}>
            <div className="flex items-center py-2 cursor-pointer gap-x-2">
              <Image src={Logo} />
            </div>
          </Link>
          <div className="flex md:order-2 mr-2 sm:mr-[-6rem] md:mr-[0rem]">
            <Link href={"https://wa.link/a0gqrg"}>
              <button className="px-10 py-2 text-sm font-bold transition duration-300 rounded-md cursor-pointer bg-amber text-maroon hover:bg-maroon hover:text-white">
                Hubungi Kami
              </button>
            </Link>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="inline-flex items-center p-2 text-sm rounded-lg text-maroon md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="maroon"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`pb-3 md:pb-0 xl:ml-96 2xl:ml-[600px] items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              open ? "visible" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link href={"/"} onClick={handleChange}>
                  <a
                    className={`block py-2 px-3 transition duration-400 font-medium md:bg-transparent hover:bg-gray-100 rounded-md md:text-textColor  ${
                      currentRoute === "/"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                    onClick={() => {
                      router.push("/");
                      handleChange;
                    }}
                  >
                    Beranda
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/about"} onClick={handleChange}>
                  <a
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md hover:bg-gray-100 md:text-textColor  ${
                      currentRoute === "/about"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Tentang
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/service"} onClick={handleChange}>
                  <a
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md md:text-textColor ${
                      currentRoute === "/service"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Layanan
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/pricelist"} onClick={handleChange}>
                  <a
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md hover:bg-gray-100 md:text-textColor ${
                      currentRoute === "/pricelist"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Daftar Harga
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar_v2;
