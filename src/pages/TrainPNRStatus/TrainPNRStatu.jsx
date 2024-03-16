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
        'X-RapidAPI-Key': '322ad4d8e7msh5c30797c3c6b0d6p1c6ea7jsn692b9f86a23a',
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
