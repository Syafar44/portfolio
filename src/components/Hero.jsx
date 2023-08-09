import React, { useEffect } from "react";
import fotoUtama from "../assets/img/syafar2.png";

const Hero = () => {
  useEffect(() => {
    const delayNama = document.getElementById("delayNama");
    const delayH6 = document.querySelector("h6");
    const delayH3 = document.querySelector("h3");
    const delayP = document.querySelector("p");
    const delayWa = document.querySelector("#delayWa");
    const geser = document.querySelector("#geser");

    if (delayNama) {
      setTimeout(() => {
        delayNama.classList.add("animate__animated", "animate__tada");
        delayNama.classList.remove("hidden");
      }, 1200); // Delay in milliseconds (0.5 seconds)
    }

    if ((delayH3, delayH6, delayP)) {
      setTimeout(() => {
        delayH3.classList.add("animate__animated", "animate__fadeIn");
        delayH3.classList.remove("hidden");
        delayP.classList.add("animate__animated", "animate__fadeIn");
        delayP.classList.remove("hidden");
      }, 2100);
    }

    if (delayWa) {
      setTimeout(() => {
        delayWa.classList.add('animate__lightSpeedInRight');
        delayWa.classList.remove("hidden");
      }, 3000); // Delay in milliseconds (0.5 seconds)
    }

    // if (geser) {
    //   setTimeout(() => {
    //     geser.classList.add('mt-[7%]');
    //     geser.classList.remove("mt-[9%]");
    //   }, 5000); // Delay in milliseconds (0.5 seconds)
    // }

  }, []);

  return (
    <>
      <section id="geser" className="md:flex md:justify-between md:ml-40 md:mx-24 mt-[7%] relative">
        <div className="avatar justify-center animate__animated animate__headShake animate__fadeIn animate__delay-3s">
          <div className="w-[85%] shadow-2xl rounded-full md:order-last md:mr-6 overflow-hidden">
            <div className="w-full h-full relative">
              <div className="-mt-6">
                <img
                  className="flex justify-center"
                  src={fotoUtama}
                  alt="Foto Utama"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-20 mx-8 md:mx-0 mt-5 md:order-first">
          <h6 className="md:text-2xl font-semibold text-xl text-gray-500 animate__animated animate__backInDown">
            Hai Teman👋, Saya
          </h6>
          <h1 id="delayNama" className="font-bold text-4xl md:text-6xl hidden">
            Syafaruddin
          </h1>
          <h3 className="mt-2 md:mt-4 font-semibold text-md md:text-xl text-gray-700 hidden">
            Front-end Web Develover
          </h3>
          <p className="text-gray-500 hidden">
            Selamat Datang Di Website Pribadi Saya
          </p>
        </div>
      </section>

      <a
        href="https://wa.me/6282250851457"
        className="fixed z-20 right-[22%] md:right-10 bottom-[25%] md:bottom-10 flex gap-3"
        target="_blank"
      >
        <h1 className="text-slate-200 mt-6 font-bold hidden md:flex">Hub Saya</h1>
        <svg
          id="delayWa"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          className="bi bi-whatsapp fill-gray-700 md:fill-slate-200 animate__animated hidden"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
        </svg>
      </a>
    </>
  );
};

export default Hero;
