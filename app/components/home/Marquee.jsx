"use client"

import React,{useState,useEffect} from 'react'

const Marquee = () => {
const healthTips = [
  "Drink plenty of water every day!",
  "Exercise at least 30 minutes daily.",
  "Eat more fruits and vegetables.",
  "Regular health check-ups are important.",
  "Get enough sleep for better health.",
];
  const [currentTip, setCurrentTip] = useState(healthTips[0]);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
  }, 10000);
  return () => clearInterval(interval);
}, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }} className="text-light col-12">
      <marquee className="col-12 p-0 w-100">{currentTip}</marquee>
    </div>
  );
}

export default Marquee
