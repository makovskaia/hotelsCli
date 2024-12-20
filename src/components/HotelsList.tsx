// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'

export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState([])
  const [status, setStatus] = useState('loading')
  useEffect(()=>{
    Loader.allHotels((res: LoaderResponseHotels) => {
      setStatus(res.status)
      console.log(res)
      if(res.status === 'success') setHotels(res.data)
    })
  },[])
  return status === 'loading' ? <div>loading...</div> :
    status === 'error' ? <div>error</div> :(
    <div className="HotelsList">
      <ul>
        {hotels.map((h:any) => <li style={{listStyle:'none'}}><HotelCard hotel={h}/></li>)}
      </ul>
    </div>
  )
}