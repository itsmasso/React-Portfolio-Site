import React, { useEffect, useState } from "react";
import "./StatusCard.css";
import windows_screen_widget from "../../assets/windows_screen_widget.svg";

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
      <img src={windows_screen_widget} alt="" id="windows_widget" />
      <div className="status-title">
        <h1>Status</h1>
      </div>
      <div className="status-description">
        <p>{time.toLocaleTimeString()} in Socal </p>
        <h1>Online</h1>
        <p>Currently listening to synthwave</p>
      </div>
    </div>
  );
};

export default StatusCard;
