import React from "react";
import { weekdays } from "../constants/day-data";

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

export default DaysInput;
