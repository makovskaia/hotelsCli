import React, { useEffect, useState } from 'react';
import { HotelCard } from './components/HotelCard'
import logo from './logo.svg';
import './App.css';

async function loadHotels(callback: any){
  try{
    const res = await fetch('http://localhost:5248/hotels')
    const json = await res.json()
    callback(json)
  }catch(e){
    console.log(e)
  }
}

function App() {
  const [hotels, setHotels] = useState([])
  
  useEffect(()=>{
    loadHotels((r:any) => setHotels(r))
  },[])
  
  return (
    <div className="App">
      {hotels && (
      <ul>
        {hotels.map(h => <li><HotelCard hotel={h}/></li>)}
      </ul>
      )}
    </div>
  );
}

export default App;
