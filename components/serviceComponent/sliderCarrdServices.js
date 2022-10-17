import Image from "next/image";
import Link from "next/link";
import bedcover from "../../public/assets/services/6.png";
import sepatu from "../../public/assets/services/5.png";
import pakaian from "../../public/assets/services/7.png";
import boneka from "../../public/assets/services/3.png";
import tas from "../../public/assets/services/2.png";
import helm from "../../public/assets/services/4.png";
import karpet_gordeng from "../../public/assets/services/1.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y
} from 'swiper';

import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import React from "react";

export default function SliderCardService() {
    return (
        <>
            <div className="flex justify-center w-full text-center bg-white">
                <div className="container px-20 my-8 text-center align-middle bg-white">
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        slidesPerView="auto"
                        navigation={true}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            480: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="relative inline-block conten-overlay">
                                <Image className="block rounded-md " src={boneka} />
                                <Link href={'/pricelist#boneka'}>
                                    <div className="absolute transition-all duration-300 ease-in w-full rounded-b h-11 left-0 bottom-1.5 bg-zinc-400/50 overlay-text" style={{cursor: "pointer"}}>
                                        <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">Boneka</div>
                                    </div>
                                </Link>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="relative inline-block conten-overlay">
                                <Image className="block rounded-md " src={tas} />
                                <Link href={'/pricelist#pakaian'}>
                                    <div className="absolute transition-all duration-300 ease-in w-full rounded-b h-11 left-0 bottom-1.5 bg-zinc-400/50 overlay-text" style={{cursor: "pointer"}}>
                                        <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">Ransel</div>
                                    </div>
                                </Link>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="relative inline-block conten-overlay">
                                <Image className="block rounded-md " src={pakaian} />
                                <Link href={'/pricelist#pakaian'}>
                                    <div className="absolute transition-all duration-300 ease-in w-full rounded-b h-11 left-0 bottom-1.5 bg-zinc-400/50 overlay-text" style={{cursor: "pointer"}}>
                                        <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">Pakaian</div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="relative inline-block conten-overlay">
                                <Image className="block rounded-md " src={helm} />
                                <Link href={'/pricelist#helm'}>
                                    <div className="absolute transition-all duration-300 ease-in w-full rounded-b h-11 left-0 bottom-1.5 bg-zinc-400/50 overlay-text" style={{cursor: "pointer"}}>
                                        <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">Helm</div>
                                    </div>
                                </Link>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="relative inline-block conten-overlay">
                                <Image className="block rounded-md " src={karpet_gordeng} />
                                <Link href={'/pricelist'}>
                                    <div className="absolute transition-all duration-300 ease-in w-full rounded-b h-11 left-0 bottom-1.5 bg-zinc-400/50 overlay-text" style={{cursor: "pointer"}}>
                                        <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">Karpet</div>
                                    </div>
                                </Link>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="relative inline-block conten-overlay">
                                <Image className="block rounded-md " src={bedcover} />
                                <Link href={'/pricelist'}>
                                    <div className="absolute transition-all duration-300 ease-in w-full rounded-b h-11 left-0 bottom-1.5 bg-zinc-400/50 overlay-text" style={{cursor: "pointer"}}>
                                        <div className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">Bed Cover</div>
                                    </div>
                                </Link>
                            </div>

                        </SwiperSlide>


                    </Swiper>
                </div>
            </div >
        </>
    )
}