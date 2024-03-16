import React, { useState, useEffect } from 'react';
import "./LiveStatus.css"

const LiveTrainStatus = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [liveStatus, setLiveStatus] = useState(null);

  const fetchTrainStatus = async () => {
    const url = `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=1`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key':  '322ad4d8e7msh5c30797c3c6b0d6p1c6ea7jsn692b9f86a23a', 
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLiveStatus(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTrainNumberChange = (e) => {
    setTrainNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchTrainStatus();
  };

  return (
    <div  className="live-train-status">
      <h1>Live Train Status</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Train Number"
          value={trainNumber}
          onChange={handleTrainNumberChange}
          className="train-number-input"
        />
        <button  className="submit-button" type="submit">Get Status</button>
      </form>
      {liveStatus && liveStatus.status ? (
        <div className="train-status-details">
          <p>Train Name: {liveStatus.data.ir_train_name}</p>
          <p>Current Station: {liveStatus.data.current_station_name}</p>
          <p>Delay: {liveStatus.data.delay} minutes</p>
          <p>Status as of: {liveStatus.data.status_as_of}</p>
          <p>Estimated Time of Arrival (ETA): {liveStatus.data.eta}</p>
          {/* Add more data fields as needed */}
        </div>
      ) : (
        <p>Status not available</p>
      )}
    </div>
  );
};

export default LiveTrainStatus;
