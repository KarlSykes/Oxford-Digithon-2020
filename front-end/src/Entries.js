import React from 'react';
import './App.css'; 
// import './Calendar.css'
import './Entries.css'
import Tag from './Tag.js'
import { flexbox } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Entries(props) {
    return (
    <div className='Entries'>
        <div style={{display:'flex', justifyContent: 'center', marginTop:'1em'}}>
            <div className='Calendar-current'>
                <em>{props.dayName}</em>
                <strong>May</strong>
                <span>{props.currentDay}</span>
            </div>
            <img style={{height:'4em', marginLeft:'0.7em', marginTop:'2em'}} src='select-date.png'/>
        </div>
        <Typography style={{fontFamily:'Sequel_Demo', textAlign:'center', marginTop:'1.5em'}} variant="h6" gutterBottom> How do you feel today?
        </Typography>
        {props.summaryMood}
        <hr style={{borderTop: '3px long dash grey', marginLeft:'1em', marginRight:'1em'}}/>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginLeft:'1em', marginRight:'1em'}}>
            {props.moods.map(mood=> {
                return <Tag activated={mood['activated']} index={mood['index']} activateMood={props.activateMood} tag={mood['mood']}></Tag>
            })}
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignContent:'end-flex'}}>
            <Button onClick={props.switchScreensHandler} style={{margin:'1em'}} variant="contained" color="secondary">
                Cancel
            </Button>
            <Button onClick={props.switchScreensHandler} style={{margin:'1em'}} variant="contained" color="primary">
                Save
            </Button>
        </div>
    </div>
  );
}

export default Entries;
