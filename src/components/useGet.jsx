import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const useGet = (URL, params) => {

    const [data, setdata] = useState({})

    const getData = async () => {
        const data_ = await axios.get(`${URL}/${params}`)
        setdata(data_)
        console.log(data_);
    }

    useEffect(() => {
        getData()
    }, []);
    
  return (
    {data}
  )
}

export default useGet