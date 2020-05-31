import React from 'react';
import './App.css'; 
import './TopBar.css'


function TopBar(props) {
  let buttonStyles = {height:'3em'}
    return (
    <div className='Top-bar'>
        <img style={buttonStyles}src='calendar.png'></img>
        <img style={buttonStyles}src='stats-button.png'></img>
        <img onClick={props.switchScreensHandler} style={{height:'4em'}}src='plus-button-2.png'></img>
        <img style={buttonStyles}src='inspo.png'></img>
        <img style={buttonStyles}src='settings-button.png'></img>
    </div>
  );
}

export default TopBar;
