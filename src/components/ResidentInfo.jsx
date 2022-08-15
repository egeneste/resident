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
            <span>{resident.status}</span>
        </div>

        <div className="card-data">
          <h3 className='big break'>{resident?.name}</h3>
          
          <p className="small">Species</p>
          <p className="big break">{resident.species}</p>
          
          <p className="small">Origen</p>
          <p className="big break">{resident.origin?.name}</p>
          
          <p className="small">Number of episodes where he/she appears</p>
          <p className="big">{resident.episode?.length}</p>
        </div>
    </div>
  )
}

export default ResidentInfo