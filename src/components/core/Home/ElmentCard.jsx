import React from 'react'
import home from "../../../assets/home.jpeg"
const ElmentCard = ({ name, location, price }) => {

    return (
        <>
            <div className="flex flex-col border-4 border-black p-4 shadow-lg">
            <img src={home} alt="home image "  className = "w-96"/>
            <div className="mt-2 flex flex-col justify-center ">
                <h2>{name}</h2>
                <p>Location: {location}</p>
                <p>Price: ${price}</p>
            </div>
            </div>
           
        </>
    )
}

export default ElmentCard