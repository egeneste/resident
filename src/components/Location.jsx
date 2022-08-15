import axios from 'axios'
import React from 'react'

import { useEffect, useState, useRef } from 'react'
import ResidentInfo from './ResidentInfo'
import useGet from './useGet'

const Location = ({locationNumber}) => {

    // state
    const [locationData, setlocationData] = useState({})
    const [searchLocation, setsearchLocation] = useState(locationNumber)

    // Hooks
    const location_number = useRef(null)
    useEffect(() => {
        getLocationData(searchLocation)
    }, [searchLocation])


    // functions
    const getLocationData = async(number) => {
        const location = await axios.get(`https://rickandmortyapi.com/api/location/${number}`)
        setlocationData(location.data)
    }

    const handle_search = (e) => {
      e.preventDefault()
      setsearchLocation(location_number.current.value)
    }
    
    
  return (
    <div className='location'>
      <div className="container">
        <h2>{locationData?.name}</h2> 
        <p className="subtitle">type: {locationData.type}</p>
        <p className="subtitle">dimention: {locationData.dimension}</p>
        <p className="subtitle">population: {locationData.residents?.length}</p>
    
        <form onSubmit={handle_search}>
          <input type="text" ref={location_number} name='location_num' placeholder='location number'/>
          <button>Search</button>
        </form>

        <section>
          {locationData?.residents?.map(resident => <ResidentInfo key={resident} residentURL={resident} />)}
          
        </section>

      </div>
    </div>
  )
}

export default Location