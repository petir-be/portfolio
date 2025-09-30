import Card from "./Card";
import "../App.css";

import work1 from "../assets/public/works/book-cover.jpg";
import work2 from "../assets/public/works/grunge-poster.jpg";
import work3 from "../assets/public/works/java-invoker.png";
import work4 from "../assets/public/works/java-ministore.png";
import work5 from "../assets/public/works/minimalist-poster.png";
import work6 from "../assets/public/works/moodboard.jpg";
import work7 from "../assets/public/works/snakegame.png";

function Works() {
    return (
        <>
            <div id = "work" class=" w-full justify-self-center px-4 py-24 bg-gradient-to-br from-slate-100 to-neutral-300">
                <div class="mb-8 text-center">
                    <h1 class="text-5xl font-bold">My Works</h1>
                    <p class = "my-3 text-xl">A small collection of works I did, from photoediting to programming.</p>
                    <hr class = "my-9 w-11/12 justify-self-center h-0.5 border-t-0 bg-gray-500"/>
                </div>
                <div class="columns-1 mx-5 sm:columns-2 md:columns-3 gap-6 space-y-6 w-11/12 justify-items-center justify-self-center">
                    <Card image={work1} title="Book Cover" />
                    <Card image={work2} title="Grunge Poster" />
                    <Card image={work3} title="Java-Invoker Game" />
                    <Card image={work4} title="Java-Ministore" />
                    <Card image={work5} title="Minimalist Poster" />
                    <Card image={work6} title="Moodboard" />
                    <Card image={work7} title="Snakegame" />
                   
                </div>
            </div>
        </>
    )
}

export default Works;