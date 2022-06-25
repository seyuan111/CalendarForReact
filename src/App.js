import './App.css';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "",
    addDay: true,
    start: new Date(2022,5,1),
    end: new Date(2022,5,3)
  },
  {
    title: "",
    start: new Date(2022,5,10),
    end: new Date(2022,5,12)
  },
  {
    title: "",
    start: new Date(2022,6,15),
    end: new Date(2022,6,18)
  },
]

function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent(){
    setAllEvents([...allEvents,newEvent])
  }

  return (
    <div className="App">
      <h1 className="title-name">Calendar</h1>
      <div>
        <input className="addEventhere" type="text" placeholder="add event here" style={{width: "20%", marginRight: "10px"}} value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
        <DatePicker className="datePick" placeholderText="start date" style={{marginRight: "10px"}} selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent,start})}/>
        <DatePicker className="datePick" placeholderText="end date" style={{marginRight: "10px"}} selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent,end})}/>
        <button className="btn" style={{marginTop: "10px"}} onClick={handleAddEvent}>Click to add event</button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}/>
    </div>
  );
}

export default App;
