import "../App.css"

function Card({ image, title }) {
    return (
        <div class="relative w-full mb-6 group overflow-hidden rounded-md shadow-lg break-inside-avoid hover:-translate-y-1 transition duration-150">
            <img src={image} alt={title} class="w-full h-auto object-cover" />
        </div>
    );
}

export default Card;