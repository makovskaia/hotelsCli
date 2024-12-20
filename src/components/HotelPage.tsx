import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'
import { LoaderComponent } from './LoaderComponent'
import { ErrorComponent } from './ErrorComponent'

type Params = {
  id: string;
}
//fetches and renders selected hotel
//!functionality is the same as in hotels list!
export const HotelPage: React.FC = () => {
  const { id } = useParams<Params>()
  const [hotel, setHotel] = useState()
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  //preload hotel and set hotel and status state
  useEffect(()=>{
    if(id) {
      Loader.hotelById(id, (res: LoaderResponse) => {
        setStatus(res.status)
        if(res.status === 'success'){
           //sorry problem is my loader is universal and my componentsthat fetch data are not, thinking how to fix it 
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
  // conditional rendering depending on state. 
  // !code dublication mentioned above!
  return status === 'loading' ? <LoaderComponent /> : status === 'error' ? <ErrorComponent error={error} /> : (
    <HotelCard hotel={hotel}/>
  )
}