import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'; 
import './SummaryGrateful.css'; 

function SummaryGrateful(props) {

  return (
    <div className='Summary-grateful'>
      <Typography  style={{textAlign:'center', fontFamily:'Sequel_Demo'}}  variant="h5" gutterBottom> GRATITUDE</Typography>
        <table>
          {props.summaryGrateful.map(gratitude=> (<tr> <td>{gratitude}</td></tr>))}
        </table>
    </div>
  );
}

export default SummaryGrateful;
