import React, { useState } from 'react';
import "./SeatAvailability.css"

const SeatAvailability = () => {
  const [classType, setClassType] = useState('');
  const [fromStationCode, setFromStationCode] = useState('');
  const [quota, setQuota] = useState('');
  const [toStationCode, setToStationCode] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [date, setDate] = useState('');
  const [availabilityData, setAvailabilityData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${classType}&fromStationCode=${fromStationCode}&quota=${quota}&toStationCode=${toStationCode}&trainNo=${trainNo}&date=${date}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '292a569bd0msh55443dd10a5042fp174bb2jsn60aaf96c56f8',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // Filter out confirm_probability_percent and confirm_probability
      const { confirm_probability_percent, confirm_probability, ...filteredData } = result;
      setAvailabilityData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Class Type"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        />
        <input
          type="text"
          placeholder="From Station Code"
          value={fromStationCode}
          onChange={(e) => setFromStationCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quota"
          value={quota}
          onChange={(e) => setQuota(e.target.value)}
        />
        <input
          type="text"
          placeholder="To Station Code"
          value={toStationCode}
          onChange={(e) => setToStationCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Train Number"
          value={trainNo}
          onChange={(e) => setTrainNo(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Check Availability</button>
      </form>

      <div className="availability-info">
        <h2>Seat Availability Information</h2>
        <div className="availability-data">
          {availabilityData && availabilityData.response_code === 200 ? (
            <div>
              <p>Train Name: {availabilityData.train_name}</p>
              <p>From Station: {availabilityData.from_station.name}</p>
              <p>To Station: {availabilityData.to_station.name}</p>
              <p>Date: {availabilityData.availability_date}</p>
              {/* Add more information based on the API response structure */}
            </div>
          ) : (
            <p>No availability information available for the provided inputs.</p>
          )}
        </div>
      </div>
      </div>
  
  );
};

export default SeatAvailability;
