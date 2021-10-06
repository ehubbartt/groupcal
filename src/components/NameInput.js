import React from "react";

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

export default NameInput;
