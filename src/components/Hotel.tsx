// @ts-nocheck
import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HotelCard } from './HotelCard'

async function loadHotel(id: string, callback: (h: Hotel) => void){
  try{
    const res = await fetch(`http://localhost:5248/hotels/${id}`)
    const hotel: Hotel = await res.json()
    callback(hotel)
  }catch(e){
    console.log(e)
  }
}

interface Params {
  id: string;
}

export const Hotel: React.FC = () => {
  const { id } = useParams<Params>()
  console.log(id)
  const [hotel, setHotel] = useState()
  console.log(hotel)
  useEffect(()=>{
    loadHotel(id, (h) => {
      console.log(h)
      setHotel(h)
    })
  },[])

  return hotel && (
    <HotelCard hotel={hotel}/>
  )
}