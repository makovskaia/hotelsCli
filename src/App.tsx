import React from 'react';
import { HotelsPage } from './components/HotelsPage'
import { HotelPage } from './components/HotelPage'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//App is routing 3 routes: hotels, hotel, any other will redirect to hotels

const App: React.FC = () => {
  return  (
    <BrowserRouter>
      <Routes>
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
        <Route
          path="*"
          element={<Navigate to="/hotels" replace={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
