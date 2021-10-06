import React, { useState, useEffect } from "react";

const TimeSelection = ({ times }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [direction, setDirection] = useState();

  const handleTimeAdd = (time, curMode) => {
    let mode;
    curMode !== undefined ? (mode = curMode) : (mode = selectMode);
    if (mode) {
      setSelectedTimes([...selectedTimes, time]);
    } else {
      let curSelectedTimes = selectedTimes;
      curSelectedTimes = curSelectedTimes.filter((curTime) => curTime !== time);
      setSelectedTimes(curSelectedTimes);
    }
  };

  const handleMouseDown = (time) => {
    let curMode;
    if (selectedTimes.includes(time)) {
      curMode = false;
    } else {
      curMode = true;
    }
    setIsDragging(true);
    setSelectMode(curMode);
    !selectedTimes.includes(times) && handleTimeAdd(time, curMode);
  };

  const handleMouseEnter = (time) => {
    if (isDragging) {
      time < selectedTimes[selectedTimes.length - 2]
        ? setDirection(1)
        : setDirection(-1);
      handleTimeAdd(time);
    }
  };

  const handleMouseUp = (time) => {
    setIsDragging(false);
  };

  useEffect(() => {
    setSelectMode(!selectMode);
    // eslint-disable-next-line
  }, [direction]);

  return (
    <div
      className="time-selector-container"
      onMouseLeave={() => {
        isDragging && setIsDragging(false);
      }}
    >
      <div className="drag-selector">
        {times.map((time, index) => {
          return (
            <div
              onMouseDown={() => handleMouseDown(time)}
              onMouseEnter={() => handleMouseEnter(time)}
              onMouseUp={() => handleMouseUp(time)}
              className={
                selectedTimes.includes(time)
                  ? "time-section selected-time"
                  : "time-section"
              }
              key={index}
            >{`${time}:00`}</div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelection;
