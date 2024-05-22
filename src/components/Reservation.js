import React, { useState } from 'react';

const Reservation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${name} on ${date} at ${time} for ${partySize} people.`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Table Reservation</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Party Size:</label>
          <input type="number" className="form-control" value={partySize} onChange={(e) => setPartySize(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
