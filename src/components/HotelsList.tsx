// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard'

async function loadHotels(callback: (res: LoaderResponseHotels)=> void){
  try{
    const res = await fetch('http://localhost:5248/hotels')
    const hotels: Array<Hotel> = await res.json()
    callback({status: 'success', data: hotels})
  }catch(e){
    callback({status: 'error'})
  }

}
  
export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState([])
  const [status, setStatus] = useState('loading')
  useEffect(()=>{
    loadHotels((res: LoaderResponseHotels) => {
      setStatus(res.status)
      console.log(res)
      if(res.status === 'success') setHotels(res.data)
    })
  },[])
  return status === 'loading' ? <div>loading...</div> :
    status === 'error' ? <div>error</div> :(
    <div className="HotelsList">
      <ul>
        {hotels.map((h:any) => <li><HotelCard hotel={h}/></li>)}
      </ul>
    </div>
  )
}