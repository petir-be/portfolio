import React, { useState } from 'react';
import '../App.css'

function Navigation() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleHamburgerClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div class="fixed top-0 w-full flex justify-between items-center p-4 px-6 bg-white shadow-md text-black md:px-15 z-100">
                <div>
                    <a href="#home"><img src="../../public/logo2.jpg" alt="logo" class = "w-[50px] h-auto"/></a>
                </div>

                <div id="hamburger" class="block md:hidden cursor-pointer" onClick={handleHamburgerClick}>
                    &#9776;
                </div>

                <div
                    id="sidebar"
                    class={`fixed top-0 right-0 h-full w-1/3 bg-gray-800 text-white z-50 p-6 transition-transform duration-300 ease-in-out ${
                        sidebarOpen ? '-translate-x-0' : 'translate-x-full'
                    } md:hidden`}
                >
                    <button
                        class="mb-6 text-2xl"
                        onClick={handleHamburgerClick}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    <ul class="space-y-6">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#work">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <nav class="hidden md:block">
                    <ul class="flex space-x-10 w-full">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {sidebarOpen && (
                <div
                    class="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
                    onClick={handleHamburgerClick}
                ></div>
            )}
        </>
    );
}

export default Navigation