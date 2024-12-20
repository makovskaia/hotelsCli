import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'
import { LoaderComponent } from './LoaderComponent'
import { ErrorComponent } from './ErrorComponent'

type Params = {
  id: string;
}

export const HotelPage: React.FC = () => {
  const { id } = useParams<Params>()
  console.log(id)
  const [hotel, setHotel] = useState()
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  console.log(hotel)
  useEffect(()=>{
    if(id) {
      Loader.hotelById(id, (res: LoaderResponse) => {
        setStatus(res.status)
        if(res.status === 'success'){
          //@ts-ignore
          setHotel(res.data)
          console.log(res)
        }else{
          //@ts-ignore
          setError(res.data)
        }
      })
    }
  },[])

  return status === 'loading' ? <LoaderComponent /> : status === 'error' ? <ErrorComponent error={error} /> : (
    <HotelCard hotel={hotel}/>
  )
}