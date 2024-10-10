import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ElmentCard from './ElmentCard'

const BASE_URL = "http://localhost:3001/"

const HouseCard = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    console.log("print url ", BASE_URL);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}properties/all`)
                console.log("API Response:", response)
                setData(response.data)
            } catch (err) {
                console.error("API Error:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])


    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="mt-8 flex justify-center w-10/12 mx-auto">
          
            {data && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4'>
                    {data.map((property, index) => (
                       <ElmentCard key={index} name = {property.title} location={property.location} 
                       price={property.price} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default HouseCard
