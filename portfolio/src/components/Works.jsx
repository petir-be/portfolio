import Card from "./Card";
import "../App.css";

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
                    <Card image={"../../public/works/book-cover.jpg"} title="Book Cover" />
                    <Card image={"../../public/works/grunge-poster.jpg"} title="Grunge Poster" />
                    <Card image={"../../public/works/java-invoker.png"} title="Java-Invoker Game" />
                    <Card image={"../../public/works/java-ministore.png"} title="Java-Ministore" />
                    <Card image={"../../public/works/minimalist-poster.png"} title="Minimalist Poster" />
                    <Card image={"../../public/works/moodboard.jpg"} title="Moodboard" />
                    <Card image={"../../public/works/snakegame.png"} title="Snakegame" />
                   
                </div>
            </div>
        </>
    )
}

export default Works;