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
                <div className="grid items-center justify-center grid-cols-3 my-8 bg-white">
                    <div className="flex items-end justify-end box-border opacity-80 hover:opacity-100 transition-all duration-300 ease-in">
                        <div className="border-solid border-gray-500 rounded-md shadow-xl w-7/12 h-96 py-6 px-4">
                            <div className="title text-center">
                                <p className="text-base antialiased font-medium tracking-wide drop-shadow mb-3">Istimewa</p>
                                <Image src={reguler_v2} width="130" height="110" />
                            </div>

                            <div className="price text-center border-b border-gray-200 pb-2">
                                <p className="text-base font-normal align-top subpixel-antialiased">Start <span className="text-xs align-top align-bottom mr-2">From</span> <span className="align-middle tracking-wide text-2xl font-medium tabular-nums">80k</span></p>
                            </div>


                            <div className="p-6">
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Cuci
                                </span>
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Kering
                                </span>
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Setrika
                                </span>
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Lipat
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center box-border mb-28">
                        <div className="border-solid border-gray-500 rounded-lg shadow-2xl w-8/12 h-96 py-6 px-4">
                            <div className="title text-center">
                                <p className="text-xl antialiased font-semibold tracking-wide drop-shadow-md mb-3">Express</p>
                                <Image src={express_v2} width="145" height="130" />
                            </div>

                            <div className="price text-center border-b border-gray-200 pb-2">
                                <p className="text-lg font-medium align-top subpixel-antialiased">Start <span className="text-sm align-top align-bottom mr-2">From</span> <span className="align-middle tracking-wide text-3xl font-semibold tabular-nums">60k</span></p>
                            </div>


                            <div className="p-3">
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
                    <div className="flex items-start justify-start box-border opacity-80 hover:opacity-100 transition-all duration-300 ease-in">
                        <div className="border-solid border-gray-500 rounded-md shadow-xl w-7/12 h-96 py-6 px-4">
                            <div className="title text-center">
                                <p className="text-base antialiased font-medium tracking-wide drop-shadow mb-3">Reguler</p>
                                <Image src={istimewa_v2} width="130" height="110" />
                            </div>

                            <div className="price text-center border-b border-gray-200 pb-2">
                                <p className="text-base font-normal align-top subpixel-antialiased">Start <span className="text-xs align-top align-bottom mr-2">From</span> <span className="align-middle tracking-wide text-2xl font-medium tabular-nums">80k</span></p>
                            </div>


                            <div className="p-6">
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Cuci{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Kering{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
                                    <FaCheckCircle className="text-maroon" /> Setrika{" "}
                                </span>
                                <span className="flex items-center justify-start gap-2 font-normal text-base">
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
