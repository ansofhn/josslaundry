import React from "react";
import Image from "next/image";
import josLaundry from "../../public/assets/josLaundry.png";

export default function SlideOne() {
    return (
        <div className="w-full bg-white">
            <div className="container">
                <div className="grid items-center justify-center grid-cols-2 mx-5 my-24 bg-white ">
                    {/* bgImage bg-no-repeat bg-cover bg-center */}
                    <div className=" relative">
                        <div className="absolute top-0 left-0">

                            <Image src={josLaundry} className="opacity-30 rotate-12 h-auto absolute w-full" />
                        </div>
                        <div className="p-4 mr-2 relative">
                            <p className="font-semibold tracking-normal leading-normal text-3xl subpixel-antialiased">
                                Joss Laundry memberikan
                                pelayanan terbaik dengan
                                didukung kinerja yang
                                handal dan berpengalaman
                            </p>
                            <p className="tracking-normal leading-normal text-base tracking-wide mt-3 text-gray-700 subpixel-antialiased">
                                Kami secara konsisten berupaya
                                memberikan yang terbaik untuk
                                kepuasan pelanggan
                            </p>

                        </div>
                    </div>
                    <div className="p-5 rounded-md shadow-lg">
                        <table class="table-fixed  min-w-full">

                            <tbody>
                                <tr>
                                    <td className="w-9"><p className="text-2xl antialiased font-thin oldstyle-nums tracking-normal text-center underline align-top">1.</p></td>
                                    <td><p className="font-medium tracking-wide text-xl subpixel-antialiased ">Harga Terjangkau</p></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><p className="text-base subpixel-antialiased font-light tracking-normal leading-relaxed text-left text-slate-700">Harga yang terjangkau, mulai dari Rp6.000/kg</p></td>
                                </tr>

                            </tbody>

                        </table>
                        <table class="table-fixed mt-3 min-w-full">

                            <tbody>
                                <tr>
                                    <td className="w-9"><p className="text-2xl antialiased font-thin oldstyle-nums tracking-normal text-center underline align-top">2.</p></td>
                                    <td><p className="font-medium tracking-wide text-xl subpixel-antialiased">Pelayanan Cepat</p></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><p className="text-base subpixel-antialiased font-light tracking-normal leading-relaxed text-left text-slate-700">Pakaian siap pakai dalam waktu 2 jam</p></td>
                                </tr>

                            </tbody>

                        </table>
                        <table class="table-fixed mt-3 min-w-full">

                            <tbody>
                                <tr>
                                    <td className="w-9"><p className="text-2xl antialiased font-thin oldstyle-nums tracking-normal text-center underline align-top">3.</p></td>
                                    <td><p className="font-medium tracking-wide text-xl subpixel-antialiased">Layanan Pick Up and Delivery</p></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><p className="text-base subpixel-antialiased font-light tracking-normal leading-relaxed text-left text-slate-700">Tidak perlu datang ke tempat kami. Joss Laundry akan memjemput cucian anda, dan mengantarkannya kembali</p></td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}