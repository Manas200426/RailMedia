import React, { useState } from 'react';
import "./FareComponent.css"

const FareComponent = () => {
  const [trainNo, setTrainNo] = useState('');
  const [fromStationCode, setFromStationCode] = useState('');
  const [toStationCode, setToStationCode] = useState('');
  const [fareData, setFareData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${trainNo}&fromStationCode=${fromStationCode}&toStationCode=${toStationCode}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '292a569bd0msh55443dd10a5042fp174bb2jsn60aaf96c56f8',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setFareData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div  className="fare-container">
      <h1>Get Train Fare Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Train Number:
          <input type="text" value={trainNo} onChange={(e) => setTrainNo(e.target.value)} />
        </label>
        <label>
          Enter From Station Code:
          <input type="text" value={fromStationCode} onChange={(e) => setFromStationCode(e.target.value)} />
        </label>
        <label>
          Enter To Station Code:
          <input type="text" value={toStationCode} onChange={(e) => setToStationCode(e.target.value)} />
        </label>
        <button type="submit">Get Fare</button>
      </form>

      {fareData && (
        <div className="fare-details">
          <h2>Fare Details</h2>
          {fareData.status ? (
            fareData.data.general.map((fareInfo) => (
              <div className="fare-info" key={fareInfo.classType}>
                <h3>{fareInfo.classType} Class</h3>
                <p>Fare: {fareInfo.fare}</p>
                <h4>Breakup:</h4>
                {fareInfo.breakup.map((breakupItem) => (
                  <p  className="breakup-item" key={breakupItem.key}>
                    {breakupItem.title}: {breakupItem.cost}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <p>No fare information available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FareComponent;


