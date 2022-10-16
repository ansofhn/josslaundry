import React from "react";
import Image from "next/image";
import aboutsus from "../../public/assets/HeroAbout.png";

export default function ServiceHero() {
  return (
    <>
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 py-0 m-0 mx-5 md:my-6">
            <div className="px-20 text-white py-15 sm:px-6 sm:pt-12 xl:px-14">
              <h1 className="font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                Tentang Kami
              </h1>
            </div>
            <div className="w-4/5 mx-auto mt-20 mb-10 sm:ml-16 lg:my-16 ">
              <Image src={aboutsus} />
            </div>
          </div>
        </div>
      </div>
    </>
    // <section className="h-[555px] px-3 pb-5 pt-[110px] bg-gradient-to-tr from-orange-500 to-yellow-500">
    //   <div className="grid items-center gap-5 lg:grid-cols-2 justify-items-center">
    //     <div className="flex flex-col items-center justify-center order-2 lg:order-1">
    //       <p className="text-4xl font-bold text-white md:text-6xl">
    //         Tentang Kami
    //       </p>
    //     </div>
    //     <div className="order-2">
    //       <Image
    //         className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
    //         src={aboutsus}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
