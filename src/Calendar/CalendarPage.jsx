import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { Link } from "react-router-dom";


const CalendarPage = () => {
  const localizer = momentLocalizer(moment);
    const [event, setevents] = useState([]);
  useEffect(()=>{
    
    const getLeaves = async ()=>{


            await axios.get('https://zsrzpuksbzimwhxqlddb.supabase.co/rest/v1/leaves?select=*',
            {
                headers: {
                  // Authorization: `Bearer ${localStorage.getItem("access_token")}`
                  'Content-Type': 'application/json',
                 apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnpwdWtzYnppbXdoeHFsZGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMzExNTUsImV4cCI6MTk5NzkwNzE1NX0._rMLleWycKDfDSj0P633reCR2j-_nlN-uTgLcO5MTsM',
                  
                },
              }).then((response)=>
              {
                // // console.log(data);
                // console.log(setLeaves(data.data));
                // console.log("calendar pagedata ");
                // // localStorage.setItem('accessToken', data.access_token);
                // // localStorage.setItem('refreshToken', data.refresh_token);
                // console.log(leaves);
                // // console.log(data)
                const leaves = response.data;
                var events1 = leaves.map((leave)=>{
                  return {
                    start: new Date(leave.start_date),
                    end : new Date(leave.end_date),
                    title: leave.reason,
                  };
                });
                console.log(events1);
                setevents(events1);

              })
              .catch(error=>{
                console.log(error);
              });
            
        }
    getLeaves();
  },[])
 
   

  return (
    <>
    <div>
        <Calendar
            events = {event}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultDate={moment().toDate()}
            localizer={localizer}
            style={{ height: 630 }}
          />
    </div>
    <div>
      <Link to ="/listleaves">
      <button type="button" class="btn btn-primary btn-lg  button-margin">Home </button>
      </Link>
      
    </div>
    </>
  )
}

export default CalendarPage
