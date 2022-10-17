import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import express from "../public/assets/pricings/express.png";
import reguler from "../public/assets/pricings/reguler.png";
import istimewa from "../public/assets/pricings/istimewa.png";
import { Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={express}
                        width="200"
                        height="200"
                        alt="Paket Express"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={istimewa}
                        width="200"
                        height="200"
                        alt="Paket Istimewa"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={reguler}
                        width="200"
                        height="200"
                        alt="Paket Reguler"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}