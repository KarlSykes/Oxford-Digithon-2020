import React from 'react';
import './App.css'; 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

function SummaryActivity(props) {
  let style = {
    border: 'dotted #ffb51d', 
    height: '100px', 
    textAlign:'center', 
    marginTop:'1em',
    marginRight:'0.5em',
    marginLeft:'0.5em'
  }

  return (
    <div style={style}>
      <Typography style={{fontFamily:'Sequel_Demo'}} variant="h5" gutterBottom> ACTIVITIES</Typography>
      {props.summaryActivity}
    </div>
  );
}

export default SummaryActivity;
