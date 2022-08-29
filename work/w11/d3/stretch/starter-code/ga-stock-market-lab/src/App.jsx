import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'

export default function App() {
  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer />
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}

