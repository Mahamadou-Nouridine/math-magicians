/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Quote from './routes/Quote';
import CalculatorRoute from './routes/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<CalculatorRoute />} />
          <Route path="*" element={<>Page not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
