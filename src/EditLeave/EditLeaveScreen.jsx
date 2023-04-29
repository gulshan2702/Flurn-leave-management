// import React, { useState } from "react";
// import axios from "axios";

// const EditLeaveScreen = (leaves ) => {
//   const [startDate, setStartDate] = useState(leave.start_date);
//   const [endDate, setEndDate] = useState(leave.end_date);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // perform client-side validation checks
//     if (!startDate || !endDate) {
//       setError("Please enter both start date and end date");
//       return;
//     }
//     if (new Date(startDate) > new Date(endDate)) {
//       setError("Start date cannot be after end date");
//       return;
//     }

//     // make API call to update leave
//     try {
//       const response = await axios.patch(
//         `https://dkgicggupnrxldwvkeft.supabase.co/rest/v1/leaves?id=eq.${leave.id}`,
//         {
//           start_date: startDate,
//           end_date: endDate,
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//       setError("Error updating leave. Please try again later.");
//     }
//   };

//   return (
//     <div className="edit-leave">
//       <h2>Edit Leave</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="start-date">Start Date:</label>
//           <input
//             type="date"
//             id="start-date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="end-date">End Date:</label>
//           <input
//             type="date"
//             id="end-date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit">Update Leave</button>
//         </div>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default EditLeaveScreen;
