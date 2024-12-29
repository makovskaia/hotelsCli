import React from 'react';
import { HotelCard } from './HotelCard'
import { Link } from 'react-router-dom';

type HotelsListProps = {
  hotels: Array<Hotel>
}
//makes components list out of list of hotels' info passed as prop
export const HotelsList: React.FC<HotelsListProps> = (props: HotelsListProps) => (
  <div className="HotelsList">
    <ul>
      {
        props.hotels.map((h: Hotel) => (
          <li key={h.id} style={{listStyle:'none'}}>
            <Link to={`/hotels/${h.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <HotelCard hotel={h}/>
            </Link>
          </li>))
      }
    </ul>
  </div>
)