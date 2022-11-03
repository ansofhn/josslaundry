import React from "react";
import Image from "next/image";
import layanankami from "../../public/assets/layanan_2.png";

export default function ServiceHero() {
  return (
    <section className="px-4 pb-5 pt-[84px] md:pt-[126px] bg-gradient-to-tr from-orange-500 to-yellow-500">
      <div className="container">
        <div className="grid items-center pb-10 lg:grid-cols-2 justify-items-center lg:gap-5">
          <div className="grid scale-75 place-items-center lg:scale-100">
            <Image src={layanankami} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="flex text-3xl font-bold tracking-normal text-center text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Layanan Kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
