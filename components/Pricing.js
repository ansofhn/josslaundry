import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import express_v2 from "../public/assets/express_v2.png";
import istimewa_v2 from "../public/assets/istimewa_v2.png";
import reguler_v2 from "../public/assets/reguler_v2.png";

export default function Pricing() {
    return (
        <div className="w-full bg-white">
            <div className="container">
                <div className="grid items-center justify-center grid-cols-3 my-20 bg-white">
                    <div className="box-border flex items-end justify-end transition-all duration-300 ease-in opacity-80 hover:opacity-100">
                        <div className="w-7/12 px-4 py-6 border-gray-500 border-solid shadow-xl rounded-xl h-96">
                            <div className="text-center title">
                                <p className="mb-3 text-base antialiased font-medium tracking-wide drop-shadow">Istimewa</p>
                                <Image src={reguler_v2} width="130" height="115" />
                            </div>

                            <div className="pb-2 text-center border-b border-gray-200 price">
                                <p className="text-base subpixel-antialiased font-normal align-top">Start <span className="mr-2 text-xs align-bottom">From</span> <span className="text-2xl font-medium tracking-wide align-middle tabular-nums">80k</span></p>
                            </div>


                            <div className="p-6">
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Cuci
                                </span>
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Kering
                                </span>
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Setrika
                                </span>
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Lipat
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="box-border flex items-center justify-center mb-28">
                        <div className="w-7/12 px-4 py-6 border-gray-500 border-solid shadow-2xl rounded-xl h-96">
                            <div className="text-center title">
                                <p className="mb-3 text-xl antialiased font-semibold tracking-wide drop-shadow-md">Express</p>
                                <Image src={express_v2} width="145" height="130" />
                            </div>

                            <div className="pb-2 text-center border-b border-gray-200 price">
                                <p className="text-lg subpixel-antialiased font-medium align-top">Start <span className="mr-2 text-sm align-bottom">From</span> <span className="text-3xl font-semibold tracking-wide align-middle tabular-nums">60k</span></p>
                            </div>


                            <div className="p-6">
                                <span className="flex items-center justify-start gap-2 font-medium">
                                    <FaCheckCircle className="text-maroon" /> Cuci{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 font-medium">
                                    <FaCheckCircle className="text-maroon" /> Kering{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 font-medium">
                                    <FaCheckCircle className="text-maroon" /> Setrika{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 font-medium">
                                    <FaCheckCircle className="text-maroon" /> Lipat{" "}
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="box-border flex items-start justify-start transition-all duration-300 ease-in opacity-80 hover:opacity-100">
                        <div className="w-7/12 px-4 py-6 border-gray-500 border-solid shadow-xl rounded-xl h-96">
                            <div className="text-center title">
                                <p className="mb-3 text-base antialiased font-medium tracking-wide drop-shadow">Reguler</p>
                                <Image src={istimewa_v2} width="130" height="115" />
                            </div>

                            <div className="pb-2 text-center border-b border-gray-200 price">
                                <p className="text-base subpixel-antialiased font-normal align-top">Start <span className="mr-2 text-xs align-bottom">From</span> <span className="text-2xl font-medium tracking-wide align-middle tabular-nums">80k</span></p>
                            </div>


                            <div className="p-6">
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Cuci{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Kering{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Setrika{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 text-base font-normal">
                                    <FaCheckCircle className="text-maroon" /> Lipat{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
