import React from 'react';
import './App.css'; 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tag from './Tag.js'

function SummaryActivity(props) {
  let style = {
    border: 'dotted #ffb51d', 
    height: '100px', 
    textAlign:'center', 
    marginTop:'1em',
    marginRight:'0.5em',
    marginLeft:'0.5em'
  }
  let tagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center'
  }

  let activities = props.summaryActivity.map(mood => <Tag fontSize={'0.8em'} activateMood={()=>{}} tag={mood} ></Tag>);

  return (
    <div style={style}>
      <Typography style={{fontFamily:'Sequel_Demo'}} variant="h5" gutterBottom> ACTIVITIES</Typography>
      <div style={tagsStyle}> 
      {activities}
        </div>
      
    </div>
  );
}

export default SummaryActivity;
