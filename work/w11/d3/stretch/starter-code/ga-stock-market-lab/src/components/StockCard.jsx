import React from 'react'

export default function StockCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{/* Company Name */}</h5>
        <p className="card-text">{/* stock price */}</p>
        { /* use a ternary to display a BUY or SELL button */}
      </div>
    </div>
  );
}
