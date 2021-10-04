import React, { useState } from "react";
import "../styles/newevent.css";
import { weekdays } from "../constants/day-data";

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
    </div>
  );
};

const Title = () => {
  return <h1 className="title">Create a New Event</h1>;
};

const NameInput = () => {
  return (
    <form className="form-card">
      <div className="label-container">
        <label className="name-label">New Event</label>
      </div>
      <input type="text" id="name-input" placeholder="Event Name" />
    </form>
  );
};

const DaysInput = ({ selectedDays, handleDayClick }) => {
  return (
    <section className="form-card">
      <div className="header-container">
        <p>Which Days?</p>
      </div>
      <div className="day-cards">
        {weekdays.map((day, index) => {
          return (
            <div
              key={index}
              className={
                selectedDays.includes(day) ? "day-card selected" : "day-card"
              }
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewEvent;
