import React, { useState, useEffect } from "react";
import TimeSelection from "./TimeSelection";
import "../styles/timeinput.css";

const TimeInput = () => {
  const [timeAcc, setTimeAcc] = useState(12);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const curTimes = [];
    for (let i = 0; i <= timeAcc; i++) {
      curTimes.push(i);
    }
    setTimes(curTimes);
    // eslint-disable-next-line
  }, [timeAcc]);

  return (
    <div className="form-card">
      <div className="header-container">
        <p>At What Time?</p>
      </div>
      <TimeSelection times={times} />
    </div>
  );
};

export default TimeInput;
