import React from 'react';
import fotoUtamaAbout from '../assets/img/syafar5.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen -mt-16 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row ml-4">
                <img src={fotoUtamaAbout} className="w-[28%] rounded-lg shadow-2xl animate__animated animate__fadeInLeft" alt="Foto Utama About" />
                <div className="ml-4 animate__animated animate__fadeInRight animate__slow">
                    <h1 className="text-xl md:text-5xl font-bold">Front-end Web Developer</h1>
                    <p className="pt-4 md:pt-6">Halo, saya <span className="font-bold text-gray-700">Syafaruddin</span>, seorang Front End Web Developer dengan kecintaan dalam</p>
                    <p>menciptakan pengalaman visual yang menarik dan interaktif di dunia web.</p>
                    <p className="pt-3 md:pt-5">Dengan 6 bulan pengalaman, saya mahir dalam <span className="text-red-600 font-bold">HTML</span>, <span className="text-blue-600 font-bold">CSS</span>, dan</p>
                    <p><span className="text-yellow-500 font-bold">JavaScript</span>, serta menguasai <span className="text-sky-500 font-bold">ReactJs</span></p>
                    <p className="pt-3 md:pt-5">Dalam setiap proyek, saya fokus pada menciptakan tampilan yang <span className="border-b border-black">menarik, cepat,</span></p>
                    <p><span className="border-b border-black">dan responsif</span>, serta memastikan bahwa pengalaman pengguna tetap menjadi</p>
                    <p><span className="font-bold">prioritas utama</span></p>
                    <div className="flex justify-end md:mr-[14%] mt-4">
                        <button className="btn hover:bg-gray-300 rounded-xl hover:shadow-inner font-bold md:mt-10">Read Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
