import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const instagram = document.querySelector("#instagram");
    const tikTok = document.querySelector("#tikTok");
    const linkedIn = document.querySelector("#linkedIn");
    const btn = document.querySelector("#btn");

    if (instagram) {
      setTimeout(() => {
        instagram.classList.add("animate__bounceInUp");
        instagram.classList.remove("hidden");
      }, 1000);
    }

    if (tikTok) {
      setTimeout(() => {
        tikTok.classList.add("animate__bounceInUp");
        tikTok.classList.remove("hidden");
      }, 1100);
    }

    if (linkedIn) {
      setTimeout(() => {
        linkedIn.classList.add("animate__bounceInUp");
        linkedIn.classList.remove("hidden");
      }, 1200);
    }

    if (btn) {
      setTimeout(() => {
        btn.classList.add("animate__bounceInUp");
        btn.classList.remove("hidden");
      }, 1300);
    }
  }, []);
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:mx-80 -mt-10 md:mt-40 gap-x-32 overflow-hidden">
        <div className="w-64 mx-auto mt-36 md:mt-0 animate__animated animate__bounceInLeft">
          <label className="block font-semibold text-gray-600">
            Masukan Nama
          </label>
          <input
            type="text"
            className="border-b border-gray-400 w-full focus:border-gray-800 focus:outline-none"
          />
        </div>
        <div className="w-64 mx-auto mt-5 md:mt-0 animate__animated animate__bounceInRight">
          <label className="block font-semibold text-gray-600">
            Masukan Email
          </label>
          <input
            type="email"
            className="border-b border-gray-400 w-full focus:border-gray-800 focus:outline-none"
          />
        </div>
        <div className="md:w-full w-64 mx-auto mt-3 md:mt-5 md:col-span-2 animate__animated animate__fadeIn animate__slow">
          <label className="block font-semibold text-gray-600">Pesan</label>
          <textarea className="border-b border-gray-400 w-full h-20 resize-none focus:border-gray-800 focus:outline-none"></textarea>
        </div>
        <div className="mx-16 md:mx-0 flex justify-start gap-6 mt-6 font-bold text-gray-500 ">
          <a
            id="instagram"
            className=" hover:text-gray-800 animate__animated hidden"
            href=""
          >
            instagram
          </a>
          <a
            id="tikTok"
            className=" hover:text-gray-800 animate__animated hidden"
            href=""
          >
            tiktok
          </a>
          <a
            id="linkedIn"
            className=" hover:text-gray-800 animate__animated hidden"
            href=""
          >
            linkedIn
          </a>
        </div>
        <div
          id="btn"
          className="flex justify-end md:items-end animate__animated hidden"
        >
          <button className="font-bold rounded-3xl md:text-md btn hover:bg-gray-300 hover:shadow-inner mr-14 md:mr-0 mt-2">
            Kirim
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
