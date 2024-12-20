// @ts-nocheck
import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'

interface Params {
  id: string;
}

export const Hotel: React.FC = () => {
  const { id } = useParams<Params>()
  console.log(id)
  const [hotel, setHotel] = useState()
  const [status, setStatus] = useState('loading')
  console.log(hotel)
  useEffect(()=>{
    Loader.hotelById(id, (res: any) => {
      setStatus(res.status)
      if(res.status === 'success'){
        setHotel(res.data)
        console.log(res)
      }else{
        console.log(res.data)
      }
    })
  },[])

  return status === 'loading' ? <p>loading...</p> : status === 'error' ? <p>error</p> : (
    <HotelCard hotel={hotel}/>
  )
}