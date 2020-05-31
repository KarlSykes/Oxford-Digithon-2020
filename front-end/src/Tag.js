import React, {useState} from 'react';
import './App.css'; 
import { white } from 'color-name';
import './Tag.css'

function Tag(props) {
  let activated = props.activated;
  console.log(activated?"ACTIVATED":"NOT ACTIVATED")
  let color = activated ? '#77f700':'#b2b2b2';
  let style = {
    fontFamily: 'roboto, sans-serif',
    backgroundColor: white,
    borderColor: color,
    color: color,
    fontSize: props.fontSize
}
  return (
    <div onClick={()=> props.activateMood(props.tag)} className='Tag' style={style}>
        {props.tag}
    </div>
  );
}

export default Tag;
