import React, { useState } from "react";
import "../styles/newevent.css";
import DaysInput from "../components/DaysInput";
import NameInput from "../components/NameInput";
import TimeInput from "../components/TimeInput";

const NewEvent = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      let curSelectedDays = selectedDays;
      curSelectedDays = curSelectedDays.filter((curDay) => curDay !== day);
      setSelectedDays(curSelectedDays);
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="main-container">
      <Title />
      <NameInput />
      <DaysInput selectedDays={selectedDays} handleDayClick={handleDayClick} />
      <TimeInput />
    </div>
  );
};

const Title = () => {
  return <h1 className="title">Create a New Event</h1>;
};

export default NewEvent;
