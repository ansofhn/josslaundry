import React from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-100 text-start lg:text-left bg-darkgreen">
        <div className="container">
          <div className="pt-20 text-center  pb-14 md:text-left">
            <div className="grid grid-cols-2 gap-20">
              <div className="mx-auto text-sm text-center">
                <p className="mb-2">Copyright @ 2022</p>
                <p>All rights reserved</p>
                <div className="grid grid-cols-3 gap-2 mt-5">
                  <Link href={"https://instagram.com/ansofhn"}>
                    <a className="p-2 text-base text-white hover:text-white bg-gray-500/50 rounded-full">
                      <FaInstagram />
                    </a>
                  </Link>
                  <Link href={"https://twitter.com/ansofhn"}>
                    <a className="p-2 text-base text-white hover:text-white bg-gray-500/50 rounded-full">
                      <FaTiktok />
                    </a>
                  </Link>
                  <Link
                    href={
                      "https://www.youtube.com/channel/UC81oGjTKWlhIMI4XbJcNzgA"
                    }
                  >
                    <a className="p-2 text-base text-white hover:text-white bg-gray-500/50 rounded-full">
                      <FaFacebook />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <h3 className="mb-4 font-sans text-base font-medium text-gray-100">
                    Company
                  </h3>
                  <div className="mb-2">
                    <Link href={"/about"}>
                      <a className="font-sans text-sm hover:text-white">
                        About Us
                      </a>
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link href={"/contact"}>
                      <a className="font-sans text-sm hover:text-white">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 font-sans text-base font-medium text-gray-100">
                    Our Service
                  </h3>
                  <p className="mb-2 font-sans text-sm">Help Center</p>
                  <p className="mb-2 font-sans text-sm">FAQ</p>
                </div>
                <div className="font-sans text-sm mr-10 py-1">
                  Jl. Sukabirus No.88B, Citeureup, Kec. Dayeuhkolot, Bandung,
                  Jawa Barat
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
