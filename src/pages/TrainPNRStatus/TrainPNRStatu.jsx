import React, { useState } from 'react';
import './PNRStatus.css'; // Import the CSS file for styling

const PNRStatus = () => {
  const [pnrNumber, setPnrNumber] = useState('');
  const [pnrStatus, setPnrStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... (API fetch code remains the same)
    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrNumber}`;
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
      setPnrStatus(result);
    } catch (error) {
      console.error(error);
      setPnrStatus({ message: 'Error fetching PNR status. Please try again.' });
    }
  };

  const getTicketConfirmation = (status) => {
    if (status && status.ConfirmTktStatus === 'Confirm') {
      return 'Ticket is Confirmed';
    } else {
      return 'Ticket is Not Confirmed';
    }
  };

  return (
    <div className="pnr-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter PNR Number"
          value={pnrNumber}
          onChange={(e) => setPnrNumber(e.target.value)}
        />
        <button type="submit">Check PNR Status</button>
      </form>

      <div className="pnr-status">
        <h2>PNR Status Information</h2>
        {pnrStatus && pnrStatus.status ? (
          <div>
            <p>PNR: {pnrStatus.data.Pnr}</p>
            <p>Train Name: {pnrStatus.data.TrainName}</p>
            <p>From: {pnrStatus.data.From}</p>
            <p>To: {pnrStatus.data.To}</p>
            <p>{getTicketConfirmation(pnrStatus.data.PassengerStatus)}</p>
            {/* Display other relevant data */}
          </div>
        ) : (
          <p>No availability information available for the provided PNR.</p>
        )}
      </div>
    </div>
  );
};

export default PNRStatus;
