import React from "react";
import Image from "next/image";
import machin from "../../public/assets/services/service-mesin.png";
import profile from "../../public/assets/services/servoce-joslaundry.jpeg";

export default function SlideTwo() {
    return (
        <div className="w-full bg-white my-24">
            <div className="container ">
                <div className="text-center">
                    <div className="grid items-center justify-center grid-cols-2 mx-8 px-10 my-8 bg-white ">
                        <div className="p-8">
                            <p className="text-start text-lg subpixel-antialiased font-medium tracking-normal leading-relaxed">
                                Joss Laundry didirikan pada tanggal 27 Juni 2020 oleh PT Berkah Bersih Semesta. Berbekal pengelolaan yang profesional dan handal, Joss Laundry kini kian diterima di masyarakat.
                            </p>
                        </div>
                        <div className="brightness-50 hover:filter-none transition-all duration-300 ease-in w-full">
                            <Image
                                src={profile}
                                className="rounded-md"
                                width="342"
                                height="236"
                            />
                        </div>



                    </div>
                    <div className="grid items-center justify-center grid-cols-2 mx-8 px-10 bg-white ">
                        <div className="brightness-50 hover:filter-none transition-all duration-300 ease-in w-full">
                            <Image
                                src={machin}
                                className="rounded-md w-11"
                                width="342"
                                height="236"
                            />
                        </div>
                        <div className="p-8">
                            <p className="text-end text-lg subpixel-antialiased font-medium tracking-normal leading-relaxed">Joss Laundry menawarkan jasa cuci dan setrika dengan harga yang lebih murah, namun kualitas tetap menjadi pioritas utama.</p>
                        </div>



                    </div>
                </div>
                {/* <div className="grid items-center justify-center grid-cols-2 mx-5 my-24 bg-white ">
                    <Image src={machin} className="" />
                    <h2>OKOK</h2>

                </div> */}
            </div>
        </div>
    )
}