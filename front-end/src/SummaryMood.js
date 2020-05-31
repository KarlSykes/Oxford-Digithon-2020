import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'; 

function SummaryMood(props) {
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
        <Typography style={{fontFamily:'Sequel_Demo'}} variant="h5" gutterBottom> Moods</Typography>
        {props.summaryMood}
    </div>
  );
}

export default SummaryMood;
