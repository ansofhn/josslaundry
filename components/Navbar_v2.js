import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo-navbar.png";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar_v2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-white md:border-b md:border-gray-100">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href={"/"}>
            <div className="flex items-center py-2 cursor-pointer gap-x-2">
              <Image src={Logo} />
            </div>
          </Link>
          <div className="flex md:order-2">
            <Link href={"https://wa.link/a0gqrg"}>
              <button
                type="button"
                className="px-10 py-2 text-sm font-bold transition duration-300 rounded-lg cursor-pointer bg-amber text-maroon"
              >
                Hubungi Kami
              </button>
            </Link>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg text-maroon md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0"
              aria-controls="navbar-cta"
              aria-expanded="false"
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
            className={`pb-3 md:pb-0 items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              open ? "visible" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col gap-1 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link href={"/"}>
                  <a
                    className="block py-2 pl-3 pr-4 font-medium text-white rounded bg-maroon md:bg-transparent md:text-textColor md:hover:font-semibold md:hover:text-maroon md:p-0"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link href={"/about"}>
                  <a className="block py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:bg-transparent md:text-textColor md:hover:font-semibold md:hover:text-maroon md:p-0">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/service"}>
                  <a className="block py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:bg-transparent md:text-textColor md:hover:font-semibold md:hover:text-maroon md:p-0">
                    Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/pricelist"}>
                  <a className="block py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:bg-transparent md:text-textColor md:hover:font-semibold md:hover:text-maroon md:p-0">
                    Price List
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
