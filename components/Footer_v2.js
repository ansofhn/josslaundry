import React from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import footerLogo from "../public/assets/footer_logo.png";

function Footer_v2() {
  return (
    <>
      <footer className="text-gray-100 text-start lg:text-left bg-darkgreen">
        <div className="container">
          <div className="text-center pb-10 pt-16 md:text-left">
            <div className="grid grid-cols-2 mx-24 gap-80">
              <div className="mr-auto">
                <div className="-mt-2">
                  <Image src={footerLogo} />
                </div>
                <div className="grid grid-cols-3 mx-7">
                  <Link
                    href={"https://www.instagram.com/josslaundry_telkomuniv/"}
                  >
                    <a
                      target={"_blank"}
                      className="p-2 mx-auto text-base text-white rounded-full hover:text-white bg-gray-500/50"
                    >
                      <FaInstagram />
                    </a>
                  </Link>
                  <Link href={"https://www.tiktok.com/@josslaundry_telkomuniv"}>
                    <a
                      target={"_blank"}
                      className="p-2 mx-auto text-base text-white rounded-full hover:text-white bg-gray-500/50"
                    >
                      <FaTiktok />
                    </a>
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=100081776875466"
                    }
                  >
                    <a
                      target={"_blank"}
                      className="p-2 mx-auto text-base text-white rounded-full hover:text-white bg-gray-500/50"
                    >
                      <FaFacebook />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <h3 className="my-1 text-sm font-semibold text-gray-100">
                    Tentang Kami
                  </h3>
                  <div className="mb-1">
                    <Link href={"/about"}>
                      <a className="font-sans text-sm hover:text-white">
                        Tentang
                      </a>
                    </Link>
                  </div>
                  <div className="mb-1">
                    <Link href={"https://wa.link/a0gqrg"}>
                      <a
                        target={"_blank"}
                        className="font-sans text-sm hover:text-white"
                      >
                        Kontak kami
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="text-sm font-sans leading-7 ">
                  <h3 className="my-1 text-sm font-semibold font-poppins text-gray-100">
                    Alamat Kami
                  </h3>
                  Jl. Sukabirus No.88B, <br />
                  Citeureup, Kec. Dayeuhkolot, <br />
                  Kabupaten Bandung, <br />
                  Jawa Barat 40267
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="text-center text-gray-100 bg-[#071516] lg:text-left">
        <div className="container">
          <div className="py-2 font-sans text-sm text-center">
            Copyright @2022 - All right reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer_v2;
