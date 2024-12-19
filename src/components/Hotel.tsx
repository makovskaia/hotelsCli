// @ts-nocheck
import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
    <article>
      <header>
        <h3>{hotel.name}</h3>
        <h4>{hotel.location}</h4>
        <h5>{hotel.rating}</h5>
      </header>
      <main>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg" style={{width:100,height:100}}/>
        <ul>
          {
            hotel.rooms && hotel.rooms.map((e: any) => <li>{JSON.stringify(e)}</li>)
          }
        </ul>
      </main>
      <footer>
        <h5>{hotel.datesOfTravel}</h5>
        <h5>{hotel.boardBasis}</h5>
      </footer>
    </article>
  )
}