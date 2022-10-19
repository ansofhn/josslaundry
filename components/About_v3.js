import Image from "next/image";
import React, { Component } from "react";
import profile from "../public/assets/brand.png";
import faq from "../public/assets/faq.png"

const About_v3 = () => {
    return (
        <div className="w-full bg-white">
        <div className="container" style={{'color':'#08291A'}}>
            <div>
                <div className="mt-6 sm:mx-6 md:mx-16 xl:mx-20 2xl:mx-40">
                    <div className="sm:mt-10 md:hidden mx-10 mt-6">
                        <Image src={profile} className="rounded-xl" />
                    </div>
                    <div className="text-center mt-6 sm:mt-10 sm:mb-4 font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
                        Sejarah Kami
                    </div>
                </div>
                <div className="grid md:grid-cols-7 md:gap-6 sm:mt-6 lg:mt-0 lg:gap-x-10 lg:gap-y-16 xl:gap-28 p-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-40 bg-white">
                    <div className="hidden md:block mt-8 lg:mt-0 px-32 md:p-0 md:w-full md:col-span-3">
                        <Image src={profile} className="rounded-xl" />
                    </div>
                    <div className="my-auto md:col-span-4 text-justify">
                        <div className="text-sm lg:text-base leading-7 leading-relaxe" style={{'color':'#08291A'}}>
                            <b>Joss Laundry</b> lahir di saat pandemi Covid-19, tepatnya pada 27 Juni 2020 oleh PT 
                            Berkah Bersih Semesta yang merupakan perusahaan karya anak bangsa bergerak di bidang jasa binatu.
                            <br/>
                            Dengan slogan "Bebaskan Indonesia Dari Jemuran", <b>Joss Laundry</b> memiliki visi utama untuk menjadi one stop solution dan market leader di Indonesia di bidang binatu.
                            <br />
                            Dukungan peralatan, bahan baku, sumber daya manusia dan 
                            manajemen yang terverifikasi membuat <b>Joss Laundry</b> mampu menjawab kebutuhan pasar 
                            untuk pengerjaan kiloan, premium, linen, dan aneka sandang lainnya.  
                        </div>
                    </div>
                </div>
                <div />
                <div className="text-center mt-2 sm:mt-10 sm:mb-4 font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
                    Lokasi Kami
                </div>
                <div className="grid md:grid-cols-7 md:gap-6 sm:mt-6 lg:mt-0 lg:gap-x-10 lg:gap-y-16 xl:gap-28 p-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-40 bg-white">
                    <div className="my-auto text-justify md:col-span-3">
                        <p className="text-sm lg:text-base leading-7 leading-relaxe" style={{'color':'#08291A'}}>
                            <b>Joss Laundry</b> pertama kali dibuka di Rawamangun, Jakarta Timur. <b className="text-maroon">Joss Laundry Telkom University</b>  sendiri merupakan salah satu cabang dari beberapa cabang <b>Joss Laundry</b> di daerah Bandung.
                        </p>
                    </div>
                    <div className="p-0 mt-10 md:mt-0 md:col-span-4 overflow-hidden bg-gray-100 rounded-xl h-60 lg:h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4445.270247133536!2d107.62989138807049!3d-6.975611913313627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9afd1042fb9%3A0x55a75d1cbb090090!2sJoss%20Laundry%20Telkom%20University!5e0!3m2!1sen!2sid!4v1665541999178!5m2!1sen!2sid"
                            height="500"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-none"
                        ></iframe>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10 lg:gap-20 sm:mx-6 md:mx-10 lg:mx-16 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-40 mt-4 lg:mt-10">
                    <div className="mb-4">
                    <div className="md:hidden mx-10 sm:mx-20 md:mx-0 md:mt-24 lg:mt-14">
                        <Image src={faq} />
                    </div>
                    <div className="2xl:mt-10 mb-4 text-left font-semibold sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        FAQ
                    </div>
                    <hr style={{'border': "2px solid orange", 'backgroundColor':"orange"}} />
                    <br />
                    <div className="dropdown-button mb-4">
                        <div className="dropdown-btn font-semibold sm:text-lg lg:text-xl mb-2">
                            Apa, yang kami lakukan?
                        </div>
                        <div className="dropdown-container text-justify text-xs sm:text-sm lg:text-base pl-4 lg:pl-6">
                        Kami selalu berupaya memberikan kepuasan kepada para pelanggan terhadap hasil dari jasa yang kami tawarkan dengan tenaga-tenaga yang sudah terlatih dan kompeten sehingga menghasilkan  pekerjaan yang baik, dan cepat namun tetap dengan harga yang terjangkau.
                        </div>
                    </div>
                    <div className="dropdown-button mb-4">
                        <div className="dropdown-btn font-semibold sm:text-lg lg:text-xl mb-2">
                        Dimana, lokasi kami?
                        </div>
                        <div className="dropdown-container text-justify text-xs sm:text-sm lg:text-base pl-4 lg:pl-6">
                        Kami berlokasi di Jalan Sukabirus Nomor 88B, Citeureup, Kabupaten Bandung, Jawa Barat
                        </div>
                    </div>
                    <div className="dropdown-button mb-4">
                        <div className="dropdown-btn font-semibold sm:text-lg lg:text-xl mb-2">
                        Kapan, jam operasional kami?
                        </div>
                        <div className="dropdown-container text-justify text-xs sm:text-sm lg:text-base pl-4 lg:pl-6">
                        Kami beroperasi mulai pukul 09.00 WIB hingga 22.00 WIB
                        </div>
                    </div>
                    <div className="dropdown-button mb-4">
                        <div className="dropdown-btn font-semibold sm:text-lg lg:text-xl mb-2">
                        Siapa, kami?
                        </div>
                        <div className="dropdown-container text-justify text-xs sm:text-sm lg:text-base pl-4 lg:pl-6">
                        Kami, <span className="text-maroon font-semibold">Joss Laundry Telkom University</span> merupakan salah satu cabang resmi dari <span className="font-semibold">Joss Laundry</span> di Indonesia. Berdiri pertamakali di Rawamangun pada tahun 2020 oleh PT Berkah Bersih Semesta, <span className="font-semibold">Joss Laundry</span> menjadi tempat laundry yang terpecaya dan dikenal dengan harga terjangkau namun tetap dengan kualitas yang mewah 
                        </div>
                    </div>
                    <div className="dropdown-button mb-4">
                        <div className="dropdown-btn font-semibold sm:text-lg lg:text-xl mb-2">
                        Mengapa, harus memilih kami?
                        </div>
                        <div className="dropdown-container text-justify text-xs sm:text-sm lg:text-base pl-4 lg:pl-6">
                        Selain memiliki harga yang sangat terjangkau dan layanan yang cepat, kami memiliki jasa Pick Up and Delivery untuk para pelanggan yang sulit mengantarkan cuciannya kepada kami. Bukan hanya itu, kami juga memiliki banyak promo yang bisa dilihat di sosial media milik kami
                        </div>
                    </div>
                    <div className="dropdown-button mb-4">
                        <div className="dropdown-btn font-semibold sm:text-lg lg:text-xl mb-2">
                        Bagaimana, cara melakukan pemesanan?
                        </div>
                        <div className="dropdown-container text-justify text-xs sm:text-sm lg:text-base pl-4 lg:pl-6">
                        Para pelanggan bisa melalukan pemesanan secara langsung ke outlet kami atau bisa menghubungi kami dengan menekan "Hubungi Kami" yang terletak di pojok kanan atas layar
                        </div>
                    </div>
                    </div>
                    <div className="hidden md:inline mt-32 md:mt-24 lg:mt-14">
                    <Image src={faq} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default About_v3;
