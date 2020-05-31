import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'; 
import './SummaryGrateful.css'; 


function SummaryWorries(props) {
  let style = {
    border: 'dotted #ffb51d', 
    // height: '100px', 
    textAlign:'center', 
    marginTop:'1em',
    marginRight:'0.5em',
    marginLeft:'0.5em'
  }

  return (
    <div className='Summary-grateful'>
        <Typography style={{fontFamily:'Sequel_Demo'}} variant="h5" gutterBottom> WORRIES</Typography>
        <table>
          {props.summaryWorries.map(worry=> (<tr> <td>{worry}</td></tr>))}
        </table>
    </div>
  );
}

export default SummaryWorries;
