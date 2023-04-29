import React, { useState, useEffect } from "react";
import axios from "axios";
import GetLeavesFiltered from './GetLeavesFiltered.css'
import { Link } from "react-router-dom";
const Leaves = () => {
  const [leaves, setLeaves] = useState([]);
  const [filter, setFilter] = useState("lastMonth");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchLeaves = async () => {
      let url = "https://zsrzpuksbzimwhxqlddb.supabase.co/rest/v1/leaves?";
      switch (filter) {
        case "currentMonth":
          url += `start_date=gt.${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-01&select=*`;
          break;
        case "lastMonth":
          const lastMonth = new Date();
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          url += `start_date=gt.${lastMonth.getFullYear()}-${
            lastMonth.getMonth() + 1
          }-01&end_date=lt.${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-01&select=*`;
          break;
        case "last6Months":
          const lastSixMonths = new Date();
          lastSixMonths.setMonth(lastSixMonths.getMonth() - 6);
          url += `start_date=gt.${lastSixMonths.getFullYear()}-${
            lastSixMonths.getMonth() + 1
          }-01&select=*`;
          break;
        case "lastYear":
          const lastYear = new Date();
          lastYear.setFullYear(lastYear.getFullYear() - 1);
          url += `start_date=gt.${lastYear.getFullYear()}-${
            lastYear.getMonth() + 1
          }-01&select=*`;
          break;
        case "custom":
          url += `start_date=gt.${startDate}&end_date=lt.${endDate}&select=*`;
          break;
          default:
          break;
      }
        
      await axios.get(url, {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("access_token")}`
          'Content-Type': 'application/json',
         apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnpwdWtzYnppbXdoeHFsZGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMzExNTUsImV4cCI6MTk5NzkwNzE1NX0._rMLleWycKDfDSj0P633reCR2j-_nlN-uTgLcO5MTsM',
          
        },
      }).then((data)=>
      {
        // console.log(data);
        console.log(setLeaves(data));
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
        console.log(leaves);
        // console.log(data)
      });
      
    };
    fetchLeaves();
  }, [filter, startDate, endDate]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);

    
  };
  if (!leaves) {
    return <div>No leaves found.</div>;
  }

  return (
    <>
    <div>
    <h2>Leaves Filtering</h2>
    <div  className ='list-leaves filter-form' >
      <label htmlFor="filter">Filter:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="currentMonth">Current Month</option>
        <option value="lastMonth">Last Month</option>
        <option value="last6Months">Last 6 Months</option>
        <option value="lastYear">Last Year</option>
        <option value="custom">Custom</option>
      </select>
      {filter === "custom" && (
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}

          />
        </div>
        
        
      )}
    </div>
    </div>

   

    <table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Leave Start Date</th>
      <th>Leave End Date</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    {leaves && leaves.data ? (
      leaves.data.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.id}</td>
            <td>{val.start_date}</td>
            <td>{val.end_date}</td>
            <td>{val.reason}</td>
            <td><button type ='button'>Edit</button></td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="4">No current leaves found.</td>
      </tr>
    )}
  </tbody>
</table>


  <div className="button">
  <Link to = "/leave">
  <button type="button" class="btn btn-primary btn-lg space-even">Apply Leave</button>
  </Link>
  <Link to = "/calendar">
    <button type="button" class="btn btn-secondary btn-lg space-even">Calendar View</button>
    </Link>
    <Link to = "/">
    <button type="button" class="btn btn-secondary btn-lg space-even">Logout</button>
    </Link>
  </div>
  </>
   

  
    

    
   
   

  )};
   export default Leaves;

  

           
