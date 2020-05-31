import React from 'react';
import Calendar from './Calendar.js'
import TopBar from './TopBar.js'
import SummaryMood from './SummaryMood.js'
import SummaryActivity from './SummaryActivity.js'
import SummaryGrateful from './SummaryGrateful.js'
import SummaryWorries from './SummaryWorries.js'
import './App.css'; 

function Homescreen(props) {
  let grateful = props.summaryGrateful.length>0?
    <SummaryGrateful style={{marginTop: '1em'}} summaryGrateful={props.summaryGrateful}/>:''
  
  let worries = props.summaryWorries.length>0?
    <SummaryWorries style={{marginTop: '1em'}} summaryWorries={props.summaryWorries}/>:''

  let mood = props.summaryMood.length>0?
    <SummaryMood  summaryMood={props.summaryMood}/>:''

  let activities = props.summaryActivity.length>0?
    <SummaryActivity style={{marginTop: '1em'}} summaryActivity={props.summaryActivity}/>:''
  
    return (
    <div style={{display:'flex', flexDirection: 'column'}}>
        <TopBar switchScreensHandler={props.switchScreensHandler}></TopBar>
        <Calendar dayName={props.dayName} currentDay={props.currentDay} setDay={props.setDay}/>
        {mood}
        {activities}
        {grateful}
        {worries}
    </div>
  );
}

export default Homescreen;
