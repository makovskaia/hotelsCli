// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'
import { LoaderComponent } from './LoaderComponent'

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
  return status === 'loading' ? <LoaderComponent /> :
    status === 'error' ? <div>error</div> :(
    <div className="HotelsList">
      <ul>
        {hotels.map((h:any) => <li style={{listStyle:'none'}}><HotelCard hotel={h}/></li>)}
      </ul>
    </div>
  )
}