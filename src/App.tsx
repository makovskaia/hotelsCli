// @ts-nocheck
import React from 'react';
import { HotelsList } from './components/HotelsList'
import { Hotel } from './components/Hotel'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';




const App: React.FC = () => {
  
  return  (
    <BrowserRouter>
      <Routes>
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route
          path="*"
          element={<Navigate to="/hotels" replace={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
