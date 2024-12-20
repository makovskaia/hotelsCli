
import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'
import { LoaderComponent } from './LoaderComponent'
import { ErrorComponent } from './ErrorComponent'
import { Link } from 'react-router-dom';

export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  useEffect(()=>{
    Loader.allHotels((res: LoaderResponse) => {
      setStatus(res.status)
      console.log(res)
      
      if(res.status === 'success'){
        //@ts-ignore
        setHotels(res.data)
      }else{
        //@ts-ignore
        setError(res.data)
      }
    })
  },[])
  return status === 'loading' ? <LoaderComponent /> :
    status === 'error' ? <ErrorComponent error={error} /> :(
    <div className="HotelsList">
      <ul>
        {hotels.map((h:any) => (
          <li key={h.id} style={{listStyle:'none'}}>
            <Link to={`/hotels/${h.id}`} style={{textDecoration: 'none'}}>
              <HotelCard hotel={h}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}