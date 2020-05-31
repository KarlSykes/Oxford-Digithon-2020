import React from 'react';
import './App.css'; 
import './Calendar.css'


function Calendar(props) {
  return (
    <div className='Calendar'>
        <img onClick={() => props.setDay(false)} className='Calendar-previous' src='arrow-right.png'/>
        <div className='Calendar-current'>
          <em>{props.dayName}</em>
          <strong>May</strong>
          <span>{props.currentDay}</span>
        </div>
        <img onClick={() => props.setDay(true)} className='Calendar-next' src='arrow-right.png'/>
    </div>
  );
}

export default Calendar;
