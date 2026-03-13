import dadi from "./assets/d.jpeg"

function Card(){
    return (
        <div className="card">
            <img src={dadi} alt="" />
            <p>Dadi is best {"in world".toUpperCase()}</p>
        </div>
    )
}

export default Card