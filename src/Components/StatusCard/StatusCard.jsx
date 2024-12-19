import React, { useEffect, useState } from "react";
import "./StatusCard.css";


const StatusCard = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="status-card">
      
      <div className="status-title">
        <span>&#10209;</span>
        <h1 className="vhs neon-white">Status</h1>
        <p>_ &#9633; x</p>
      </div>
      <div className="status-description">
        <p>{time.toLocaleTimeString()} in Socal </p>
        <h1 className="vhs">Online</h1>
        <p>Currently listening to synthwave</p>
      </div>
    </div>
  );
};

export default StatusCard;
