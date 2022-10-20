import Image from "next/image";
import React from "react";
import profile from "../public/assets/services/servoce-joslaundry.jpeg";

function About_v2() {
  return (
    <div className="w-full bg-white">
      <div className="container">
        <div>
          <div className="mt-32 mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
            Selamat Datang di Joss Laundry
          </div>
          <div className="mb-20 text-sm font-light text-center text-textColor">
            pelayanan terbaik dengan didukung kinerja yang handal dan
            berpengalaman
          </div>
          <div className="grid grid-cols-2 gap-20 p-4 mx-24 bg-white">

            <Image src={profile} className="rounded-xl" />

            <div className="my-auto">
              <h3 className="mb-10 text-xl font-semibold text-darkgreen">
                Sejarah kami
              </h3>
              <p className="mb-4">
                Joss Laundry didirikan pada tanggal 27 Juni 2020 oleh PT Berkah
                Bersih Semesta. Berbekal pengelolaan yang profesional dan
                handal, Joss Laundry kian diterima di masyarakat.
              </p>
              <p>Bebaskan Indonesi Dari Jemuran</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-2 mx-20 my-20 bg-white">
          <div className="col-start-1 p-8 rounded-xl bg-softblue/50 pb-96 text-darkgreen">
            <h3 className="mb-6 text-xl font-semibold">
              Apa yang kami lakukan
            </h3>
            <p className="mb-4">
              Joss Laundry menawarkan jasa cuci dan setrika dengan harga yang
              lebih murah, namun kualitas tetap menjadi pioritas utama.
            </p>
            <p>
              Kami secara konsisten berupaya memberikan yang terbaik untuk
              kepuasan pelanggan.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-amber/60 text-darkgreen">
            <h3 className="mb-6 text-xl font-semibold">
              Apa yang dapat kami layani
            </h3>
            <p className="mb-1 font-medium ">Harga Terjangkau</p>
            <p className="mb-4">
              Kami memasang harga yang terjangkau, mulai dari Rp6.000/kg
            </p>
            <p className="mb-1 font-medium">Pelayanan Cepat</p>
            <p className="mb-4">
              Kami menyediakan jasa express, pakaian anda akan selesai hanya
              dalam waktu 2 jam
            </p>
            <p className="mb-1 font-medium">Layanan Pickup and Delivery</p>
            <p className="mb-4">
              Dengan layanan ini, anda tidak perlu datang ke tempat kami. Joss
              Laundry akan memjemput cucian anda, dan mengantarkannya kembali.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-2 mx-20 my-20">
          <div className="mx-20 my-auto">
            <div className="mb-4 text-3xl font-semibold">
              Lebih Dari 1000 Cabang Joss Laundry tersebar di seluruh Indonesia
            </div>
            <p className="text-sm font-light 2xl:mr-28">
              Tidak perlu cape-cape nyuci untuk kalian yang tidak ingin merusak
              kelembutan tangan dengan jahatnya sabun cuci, karena kami sudah
              hadir di setiap kota <br />{" "}
              <span className="italic font-medium tracking-wide">
                Cek Sekarang Lokasinya
              </span>
            </p>
          </div>
          <div className="p-0 mx-4 overflow-hidden bg-gray-100 rounded-xl h-96">
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
        {/* <div className="grid grid-cols-3 gap-10 mx-32 my-20">
          <Image src={picig1}/>
          <Image src={picig2}/>
          <Image src={picig3}/>
        </div> */}
      </div>
    </div>
  );
}

export default About_v2;
