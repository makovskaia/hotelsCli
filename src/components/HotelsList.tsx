import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard'
import { Loader } from '../Loader'
import { LoaderComponent } from './LoaderComponent'
import { ErrorComponent } from './ErrorComponent'
import { Link } from 'react-router-dom';

// !has similar logic as hotel page component, i want to fix it!

//renders list of hotels. ?maybe should be made stateless to remove code dublication or use some custom hook?
export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState([])
  const [status, setStatus] = useState('loading')
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
  // conditional rendering depending on state. 
  // !code dublication mentioned above!
  return status === 'loading' ? <LoaderComponent /> :
    status === 'error' ? <ErrorComponent error={error} /> : (
    <div className="HotelsList">
      <ul>
        {//makes components list out of list of hotels' info 
          hotels.map((h: Hotel) => (
            <li key={h.id} style={{listStyle:'none'}}>
              <Link to={`/hotels/${h.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <HotelCard hotel={h}/>
              </Link>
            </li>))
        }
      </ul>
    </div>
  )
}