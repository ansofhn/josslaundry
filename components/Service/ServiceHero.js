import React from "react";
import Image from "next/image";
import layanankami from "../../public/assets/layanan-kami-2.png";

export default function ServiceHero() {
  return (
    <section className="px-3 pb-5 pt-[110px] bg-gradient-to-tr from-orange-500 to-yellow-500">
      <div className="container">
        <div className="grid items-center pb-10 lg:grid-cols-2 justify-items-center lg:gap-5">
          <div className="flex flex-col items-center justify-center">
            <p className="flex text-4xl font-bold tracking-normal text-center text-white sm:text-5xl lg:text-6xl">
              Layanan Kami
            </p>
          </div>
          <div className="grid scale-75 place-items-center lg:scale-100">
            <Image src={layanankami} />
          </div>
        </div>
      </div>
    </section>
  );
}
