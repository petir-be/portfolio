import { useState } from 'react';
import Pictures from './Pictures';

import pic1 from "../assets/public/gallery/1.png";
import pic2 from "../assets/public/gallery/2.png";
import pic3 from "../assets/public/gallery/3.JPEG";
import pic4 from "../assets/public/gallery/4.JPEG";
import pic5 from "../assets/public/gallery/5.JPEG";
import pic6 from "../assets/public/gallery/6.jpg";
import pic7 from "../assets/public/gallery/7.png";
import pic8 from "../assets/public/gallery/8.jpg";
import pic9 from "../assets/public/gallery/home.jpg";

import iconc from "../assets/public/icons/c.svg";
import iconcss from "../assets/public/icons/css.svg";
import iconhtml from "../assets/public/icons/html.svg";
import iconjs from "../assets/public/icons/javascript.svg";
import iconphp from "../assets/public/icons/php.png";
import iconreact from "../assets/public/icons/react.svg";
import iconsql from "../assets/public/icons/sql.svg";
import icontailwind from "../assets/public/icons/tailwind.svg";


function About() {
    const [showFull, setShowFull] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const paragraph = `Hey there! I'm Kurt P. Ereño, a passionate 3nd-year Information Technology student at Pamantasan ng Lungsod ng Valenzuela,
        with a deep love game programming. I thrive on solving complex problems, optimizing systems, and bringing ideas to life through code. 
        Whether it's crafting efficient programs or building immersive games, I'm always eager to learn, experiment, and push my skills to 
        the next level. Currently honing my expertise in different programming languages, as well as website development, and photoediting 
        softwares like Photoshop, I'm on a journey to turn my passion into a career.`;

    const shortParagraph = `Hey there! I'm Kurt P. Ereño, a passionate 3nd-year Information Technology student at Pamantasan ng Lungsod ng Valenzuela with a deep love...`;

    return (
        <>
            <div id = "about" class="w-full justify-self-center px-4 py-24">
                <h1 class="text-5xl font-bold text-center">Who's me</h1>
                <div class="w-4/5 justify-self-center text-lg text-justify my-8 hidden md:block">
                    <p class = "indent-10">{paragraph}</p>
                </div>
                <div class="w-4/5 justify-self-center text-lg text-justify my-8 block md:hidden">
                    <p class = "indent-10">
                        {showFull ? paragraph : shortParagraph}
                        {showFull && (
                            <button class="ml-2 text-gray-600 underline" onClick={() => setShowFull(false)}>
                                See Less
                            </button>
                        )}
                        {!showFull && (
                            <button class="ml-2 text-gray-600 underline" onClick={() => setShowFull(true)}>
                                See more
                            </button>
                        )}
                    </p>
                </div>
                <div class="flex flex-wrap justify-center gap-4 mb-25">
                    <div class="relative group icons">
                        <img src={iconc} alt="C#" class="iconImages" />
                        <span class="spanIcon">
                            C#
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={iconcss} alt="CSS" class="iconImages" />
                        <span class="spanIcon">
                            CSS
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={iconhtml} alt="HTML" class="iconImages" />
                        <span class="spanIcon">
                            HTML
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={iconjs} alt="JavaScript" class="iconImages" />
                        <span class="spanIcon">
                            Javascript
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={iconphp} alt="PHP" class="iconImages" />
                        <span class="spanIcon">
                            PHP
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={iconreact} alt="React" class="iconImages" />
                        <span class="spanIcon">
                            React
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={iconsql} alt="MySQL" class="iconImages" />
                        <span class="spanIcon">
                            MySQL
                        </span>
                    </div>
                    <div class="relative group icons">
                        <img src={icontailwind} alt="Tailwind" class="iconImages" />
                        <span class="spanIcon">
                            Tailwind
                        </span>
                    </div>
                    
                </div>
                <div class="columns-1 mx-5  sm:columns-2 md:columns-3 space-y-6 justify-items-center w-5/6 justify-self-center">
                    <Pictures picture={pic1} />
                    <Pictures picture={pic2} />
                    <Pictures picture={pic3} />
                    <Pictures picture={pic4} />
                    <Pictures picture={pic5} />
                    <Pictures picture={pic6} />
                    <Pictures picture={pic7} />
                    <Pictures picture={pic8} />
                    <Pictures picture={pic9} />
                    
                    
                </div>
            </div>
        </>
    )
}
export default About;