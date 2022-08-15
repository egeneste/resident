import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'
const ResidentInfo = ({residentURL}) => {
    
  // // hooks
  const [resident, setresident] = useState({})
  
  useEffect(() => {
    getResident()
  }, []);

  // function
  const getResident = async () => {
    console.log('oooo');
    const $_resident = await axios.get(`${residentURL}`)
    console.log($_resident);
    setresident($_resident.data)
  }

  return (
    <div className='card'>
        
        <img src={resident?.image} alt="resident image" className="card-image" />
        <div className="status">
            <div className="circle"></div>
            <p>{resident.status}</p>
        </div>
        <h3>{resident?.name}</h3>
        <p className="small">Species</p>
        <p className="big">{resident.species}</p>

        <p className="small">Origen</p>
        <p className="big">{resident.origin?.name}</p>

        <p className="small">Number of episodes where he/she appears</p>
        <p className="big">{resident.episode?.length}</p>
    </div>
  )
}

export default ResidentInfo