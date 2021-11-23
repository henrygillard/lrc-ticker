import React, { useRef } from "react";
import { Line, Chart } from "react-chartjs-2";

function Dashboard({ price, data, pair }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }

  const num = price*(867.711)
  const portfolio = Math.round(num * 100) / 100
  return (
      
    <div className="dashboard">
      <h2>{pair} Price:</h2>
      <h1>{`$${price}`}</h1>
      <h2>My Investment Value:</h2>
      <h1>{`$${portfolio}`}</h1>
      
    </div>
  );
}

export default Dashboard;