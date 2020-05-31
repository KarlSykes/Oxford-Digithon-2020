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
            <Tag activated={props.moods.includes('happy')} activateMood={props.activateMood} tag='happy'></Tag>
            <Tag activated={props.moods.includes('sad')} activateMood={props.activateMood} tag='sad'></Tag>
            <Tag activated={props.moods.includes('excited')} activateMood={props.activateMood} tag='excited'></Tag>
            <Tag activated={props.moods.includes('anxious')} activateMood={props.activateMood} tag='anxious'></Tag>
            <Tag activated={props.moods.includes('lonely')} activateMood={props.activateMood}  tag='lonely'></Tag>
            <Tag activated={props.moods.includes('tired')} activateMood={props.activateMood}  tag='tired'></Tag>
            <Tag activated={props.moods.includes('add your own')} activateMood={props.activateMood} tag='add your own'></Tag>
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
