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
        <h1>Status</h1>
      </div>
      <div className="status-description">
        <p>{time.toLocaleTimeString()}</p>
        <h1>I'm Online</h1>
      </div>
    </div>
  );
};

export default StatusCard;
