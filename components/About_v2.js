import React from "react";

function About_v2() {
  return (
    <div className="w-full bg-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 p-2 mx-20 my-32 bg-white">
          <div className="p-2">
            <h3 className="text-3xl font-bold text-darkgreen">Joss Laundry</h3>
            <p className="mb-14">
              pelayanan terbaik dengan didukung kinerja yang handal dan
              berpengalaman
            </p>
          </div>
          <div className="col-start-1 p-8 rounded-lg bg-softblue/50 pb-96">
            <h3 className="mb-2 text-xl font-bold text-darkgreen">
              What we do
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
          <div className="p-8 rounded-lg bg-amber/50">
            <h3 className="mb-2 text-xl font-bold text-darkgreen">
              What we serve
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
          <div className="p-8 bg-red-200 rounded-lg">
            <h3 className="mb-2 text-xl font-bold text-darkgreen">
              Our history
            </h3>
            <p className="mb-4">
              Joss Laundry didirikan pada tanggal 27 Juni 2020 oleh PT Berkah
              Bersih Semesta. Berbekal pengelolaan yang profesional dan handal,
              Joss Laundry kian diterima di masyarakat.
            </p>
            <p>Bebaskan Indonesi Dari Jemuran</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h3 className="mb-2 text-xl font-bold text-darkgreen">
              Our location
            </h3>
            <p className="mb-4">
              Jl. Sukabirus No.88B, Citeureup, Kec. Dayeuhkolot, Kabupaten
              Bandung, Jawa Barat 40267.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-2 mx-20 my-32">
          <div className="mx-20 my-auto">
            <div className="mb-4 text-3xl font-semibold">
              Lebih Dari 1000 Cabang Joss Laundry tersebar di seluruh Indonesia
            </div>
            <p className="text-sm font-light 2xl:mr-28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              molestie purus ipsum, in blandit tortor commodo at. Praesent
              suscipit turpis et commodo facilisis.
            </p>
          </div>
          <div className="p-0 mx-4 bg-gray-100 rounded-lg h-96">
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
      </div>
    </div>
  );
}

export default About_v2;
