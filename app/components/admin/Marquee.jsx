"use client"

import React,{useState,useEffect} from 'react'

const Marquee = () => {
const healthTips = [
  "Rise and shine! Every day is a fresh opportunity to make a difference.",
  "Alone we can do so little; together we can do so much. Let’s make today count!",
  "Excellence is not an act, but a habit. Keep pushing forward!",
  "Great things take time. Stay patient, stay focused, and keep growing.",
  "A positive mindset brings positive results. Keep your energy high!",
  "Challenges are just stepping stones to success. Never give up!",
  "Lead with integrity, serve with compassion, and inspire with action.",
  "Success is built on consistency, not just talent. Stay consistent!",
  "A small act of kindness can create endless ripples. Keep spreading goodness!",
  "Every day is a blessing. Appreciate the journey and keep moving forward."
];
  const [currentTip, setCurrentTip] = useState(healthTips[0]);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
  }, 10000);
  return () => clearInterval(interval);
}, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }} className="text-light col-12 ">
      <marquee className="col-12">{currentTip}</marquee>
    </div>
  );
}

export default Marquee
