import React, { useState, useEffect } from "react";
import "../styles/timeinput.css";

const TimeInput = () => {
  const [timeAcc, setTimeAcc] = useState(12);
  const [times, setTimes] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  useEffect(() => {
    const curTimes = [];
    for (let i = 0; i <= timeAcc; i++) {
      curTimes.push(i);
    }
    setTimes(curTimes);
    // eslint-disable-next-line
  }, [timeAcc]);

  const handleTimeClick = (time) => {
    console.log(time);
    if (selectedTimes.includes(time)) {
      let curSelectedTimes = selectedTimes;
      curSelectedTimes = curSelectedTimes.filter((curTime) => curTime !== time);
      setSelectedTimes(curSelectedTimes);
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  return (
    <div className="form-card">
      <div className="header-container">
        <p>At What Time?</p>
      </div>
      <div className="time-selector-container">
        <div className="drag-selector">
          {times.map((time, index) => {
            return (
              <TimeSection
                key={index}
                time={time}
                handleTimeClick={handleTimeClick}
                selectedTimes={selectedTimes}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TimeSection = ({ time, selectedTimes, handleTimeClick }) => {
  return (
    <div
      onClick={() => handleTimeClick(time)}
      className={
        selectedTimes.includes(time)
          ? "time-section selected-time"
          : "time-section"
      }
    >{`${time}:00`}</div>
  );
};

export default TimeInput;
