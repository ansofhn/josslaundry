import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import Logo from "../public/assets/logo-navbar.png";


export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <div className="flex items-center py-2 cursor-pointer gap-x-2">
                <Image src={Logo} />
              </div>
            </Link>

            <div className="flex items-center justify-between gap-20">
              <div className="flex items-center text-sm gap-x-2">
                <NavLink url={"/"}>Home</NavLink>
                <NavLink url={"/about"}>About</NavLink>
                <NavLink url={"/service"}>Service</NavLink>
                <NavLink url={"/pricelist"}>Price List</NavLink>
              </div>
              <div className="flex items-center gap-x-2">
                <Link href={"/contact"}>
                  <Button
                    className={
                      "transition duration-300 text-sm font-bold px-10 py-2 bg-amber text-maroon"
                    }
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
