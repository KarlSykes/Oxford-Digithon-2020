import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tag from './Tag.js'
import './App.css'; 

function SummaryMood(props) {
  let style = {
    border: 'dotted #ffb51d', 
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

  let moods = props.summaryMood.map(mood => <Tag fontSize={'0.8em'} activateMood={()=>{}} tag={mood} ></Tag>);

  return (
    <div style={style}>
        <Typography style={{fontFamily:'Sequel_Demo'}} variant="h5" gutterBottom> Moods</Typography>
        <div style={tagsStyle}> 
          {moods}
        </div>
        
    </div>
  );
}

export default SummaryMood;
