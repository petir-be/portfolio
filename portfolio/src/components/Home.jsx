import '../App.css'
import React from 'react';

import logo1 from "../assets/public/logo1.jpg";
import kurt from "../assets/public/kurt.png";

function Home() {
    return (
        <>
            <div id= "home" class="min-h-screen flex flex-col items-center justify-center px-2 py-24 mt-10">
                <div class="w-full max-w-6xl flex flex-col md:flex-row items-center overflow-hidden">
                    <div class="border-t-5  border-[#2b2d42] flex-1 flex flex-col justify-center items-center md:items-start px-4  md:px-10 py-5 md:border-t-0 md:border-l-8">
                        <h2 class="text-2xl md:text-4xl font-light mb-2 text-[#2b2d42] text-center md:text-left">Hello, I am</h2>
                        <h1 class="text-4xl md:text-7xl font-extrabold mb-4 text-[#2b2d42] text-center md:text-left">Kurt P. Ereño</h1>
                        <p class="text-base md:text-xl md:mb-8 mb-5 max-w-lg text-[#2b2d42] text-center md:text-left">
                            A tech-savvy 3rd year Information Technology student from Pamantasan ng Lungsod ng Valenzuela that has a passion for programming.
                        </p>
                        <h4 class="text-lg md:text-2xl font-light mb-1 text-[#2b2d42] text-center md:text-left">Your future</h4>
                        <h2 class="text-2xl md:text-4xl font-bold md:mb-8 text-[#2b2d42] text-center md:text-left">Developer</h2>
                        <div class="flex space-x-4 mt-4 justify-center md:justify-start">
                            <a href="#">
                                <img src={"../../public/facebook.svg"} alt="Facebook" class="w-10 h-10" />
                            </a>
                            <a href="#">
                                <img src={"../../public/icons8-instagram-50.png"} alt="Instagram" class="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                    <div class="flex-1 flex items-center justify-center relative w-full md:w-auto mt-10 md:mt-0">
                        <img src={logo1} alt="" class="absolute -z-1 h-[500px] md:h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
                        <img
                            src={kurt}
                            alt="Kurt P. Ereño"
                            class="relative rounded-[25%] object-cover w-lg min-w-lg h-auto md:w-lg md:h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;