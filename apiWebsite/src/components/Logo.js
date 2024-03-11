import background from "../img/Stadion3.jpg";

export default function Logo(){
    return (
        <div className = "box-border p-4 border-black shadow-md shadow-black w-full " style={{ backgroundImage: `url(${background})` }}>
            <div nowrap className = " font-lobster text-6xl ml-3 text-center">Bundesliga</div>
        </div>
    )
}