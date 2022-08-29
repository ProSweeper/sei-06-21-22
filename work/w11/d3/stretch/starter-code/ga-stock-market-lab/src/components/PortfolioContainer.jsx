import React from 'react';
import Stock from './StockCard'

export default function PortfolioContainer() {
  return (
    <div>
      <h2>My Portfolio - { /* render the total value of the stocks in the portfolio here */}</h2>
      { /* render the stocks in the user's portfolio using the StockCard component */ }
    </div>
  );
}
