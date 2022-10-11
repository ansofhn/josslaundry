import React from "react";
import Image from "next/image"; 
import layanankami from '../../public/assets/layanan-kami.png'
import gambar_1 from '../../public/assets/housecare/1.png'
import gambar_2 from '../../public/assets/housecare/2.png'
import gambar_3 from '../../public/assets/housecare/3.png'
import gambar_4 from '../../public/assets/housecare/4.png'
import gambar_5 from '../../public/assets/housecare/5.png'
import gambar_6 from '../../public/assets/housecare/6.png'

export default function PhotoHouseCare() {
  return (
    <section className="h-[555px] px-3 pb-5 pt-[110px] container">
      <div className="grid grid-cols-3 items-center justify-items-center gap-x-12 gap-y-20">
        <Image className="w-4 h-4" src={gambar_1} />
        <Image className="w-4 h-4" src={gambar_2} />
        <Image className="w-4 h-4" src={gambar_3} />
        <Image className="w-4 h-4" src={gambar_4} />
        <Image className="w-4 h-4" src={gambar_5} />
        <Image className="w-4 h-4" src={gambar_6} />
      </div>
    </section>
  );
}