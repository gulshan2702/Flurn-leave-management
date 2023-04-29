import { useState } from "react";
import axios from "axios";
import './LeaveForm.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const LeaveForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Client-side validation checks if start date and end date is proper
    if (!startDate || !endDate) {
      setError("Please enter start and end dates.");
    } else if (new Date(startDate) > new Date(endDate)) {
      setError("End date cannot be before start date.");
    } else {
      // Make API call to submit leave application 
      const data = { start_date: startDate, end_date: endDate, reason };
      axios
        .post("https://zsrzpuksbzimwhxqlddb.supabase.co/rest/v1/leaves", 
           data,
           {
           headers: {
            'Content-Type': 'application/json',
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnpwdWtzYnppbXdoeHFsZGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMzExNTUsImV4cCI6MTk5NzkwNzE1NX0._rMLleWycKDfDSj0P633reCR2j-_nlN-uTgLcO5MTsM',
            // 'Authorization': 'Bearer token'
          },
        })
        .then((response) => {
          console.log(response);
          // Clear form inputs on successful submission
          setStartDate("");
          setEndDate("");
          setReason("");
          history('/listleaves');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="leaveForm">

    
    <form className=  'leaveForm form' onSubmit={handleSubmit}>

      <div >
        <label htmlFor="startDate">Start Date*</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div >
        <label htmlFor="endDate">End Date*</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div >
        <label htmlFor="reason">Reason</label>
        <input
          type="text"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Apply</button>
        <Link to ="/listleaves">
        <button type ="button" className="button-size">Home</button>
      </Link>
    </form>
    </div>
  );
};
export default LeaveForm;