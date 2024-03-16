import React, { useState } from 'react';
import "./TrainDetails.css"

const TrainDetails = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [trainDetails, setTrainDetails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStation}&toStationCode=${toStation}&dateOfJourney=${journeyDate}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '322ad4d8e7msh5c30797c3c6b0d6p1c6ea7jsn692b9f86a23a',
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      });

      const data = await response.json();
      setTrainDetails(data.data);
    } catch (error) {
      console.error('Error fetching train details:', error);
    }
  };

  return (
    <div className="train-details-container">
      <h1>Available Trains</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="From Station Code"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="To Station Code"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
          className="search-input"
        />
        <input
          type="date"
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
          className="search-input"
        />
        <button className="search-button" type="submit">Search Trains</button>
      </form>

      {trainDetails.map(train => (
        <div key={train.train_number} className="train-card">
           <h2>Train Number: {train.train_number}</h2>
          <p>Train Name: {train.train_name}</p>
          <p>From: {train.fromStationName} - To: {train.toStationName}</p>
          <p>Departure Time: {train.from_std}</p>
          <p>Arrival Time: {train.to_std}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainDetails;
