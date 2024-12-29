import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'
import { ConditionalRender } from './ConditionalRender'
import { HotelsList } from './HotelsList'
import { Link } from 'react-router-dom';

// !has similar logic as hotel page component, i want to fix it!

//renders list of hotels. ?maybe should use some custom hook?
export const HotelsPage: React.FC = () => {
  const [hotels, setHotels] = useState([])
  const [status, setStatus]: [LoadingStatus, any] = useState('loading')
  const [error, setError] = useState('')
  //preload hotels and set hotels and status state
  useEffect(()=>{
    Loader.allHotels((res: LoaderResponse) => {
      setStatus(res.status)
      if(res.status === 'success'){
        //sorry problem is my loader is universal and my componentsthat fetch data are not, thinking how to fix it 
        //@ts-ignore
        setHotels(res.data)
      }else{
        //@ts-ignore
        setError(res.data)
      }
    })
  },[])
  
  return <ConditionalRender status={status} error={error}>
    <HotelsList hotels={hotels}/>
  </ConditionalRender>
}