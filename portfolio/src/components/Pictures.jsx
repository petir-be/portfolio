import "../App.css";

function Pictures({picture}){
    return(
        <>
            <div class = "w-full mb-6 group  overflow-hidden rounded-md shadow-lg/20 break-inside-avoid hover:scale-101 transition-scale duration-250">
                <img src={picture} alt={picture} loading="lazy" class="w-full h-auto object-cover" />
            </div>
        </>
    )

}
export default Pictures;