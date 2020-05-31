import React, {useState} from 'react';
import './App.css';
import Homescreen from './Homescreen.js'
import Entries from './Entries';


function App() {
  // Contains data for each day
  let mockData = {
    '2020-5-28': {moods: ["Confused", "Angry", 'Livid'], activities: ["Yoga", "Meditation"], grateful:[], worries:[]},
    '2020-5-29': {moods: ["Cranky", "Thirsty", "Indignant", 'Hungry'], activities: ["TV", "Internet"], grateful:[], worries:[]},
    '2020-5-30': {moods: ["Sad", "Livid", 'Gleeful'], activities: ["Ate", "Breakfast", 'Lunch'], grateful:['Suitcases', 'Aaron LEonardododoo', 'Aaron LEonardododoo'], worries:['Macaroni monster']},
    '2020-5-31': {moods: [], activities: ["Yoga", "Meditation"], grateful:[], worries:[]},
  }

  let switchScreenHandler = () => {
    if(screen == 'home') {
      setScreen('entry');
    }
    else {
      setScreen('home')
    }
  }


  let activateMood = (mood) => {
    let newMoods = moodToday
    if (newMoods[mood]) {
      newMoods[mood] = false;
    }
    else {
      newMoods[mood] = true
    }

    let moodsList = []

    newMoods.forEach(mood => {
      if(mood['activated']) moodsList.push(mood['mood'])
    })

    mockData['2020-5-31']['moods'] = moodsList;
    console.log('today moods: ' + mockData['2020-5-31']['moods'])
    
    if(day==31) {
      setSummaryGrateful(moodsList)
    }
  }
  

  // States
  const [day, setDay] = useState(31); 
  const [month, setMonth] = useState(5); 
  const [year, setYear] = useState(2020); 
  const [dayName, setDayName] = useState('Saturday'); 
  const [screen, setScreen] = useState('home'); 
    
  const [summaryMood, setSummaryMood] = useState(mockData[`2020-5-31`]['moods'])
  const [moodToday, setMoodToday] = useState([
    {mood: 'happy', activated: true},
    {mood: 'sad', activated: true},
    {mood: 'anxious', activated: false},
    {mood: 'lonely', activated: false},
    {mood: 'add your own', activated: false},
  ]); 

  const [summaryActivity, setSummaryActivity] = useState(mockData[`2020-5-31`]['activities']); 
  const [summaryGrateful, setSummaryGrateful] = useState(mockData[`2020-5-31`]['grateful']); 
  const [summaryWorries, setSummaryWorries] = useState(mockData[`2020-5-31`]['worries']); 

  let setDayHandler = (nextDay) => {
    let newDay = day;
    
    // set to the next day
    if(nextDay) {
      newDay = newDay + 1;
    }
    else { // set to the previous day
      newDay = newDay - 1;
    }
    setDay(newDay);
    setDayName(nextDay?nextDayMap[dayName]:previousDayMap[dayName]);
    
    if(mockData[`${year}-${month}-${newDay}`]) setSummaryMood(mockData[`${year}-${month}-${newDay}`]['moods'])
    else {setSummaryMood([])}
    
    if(mockData[`${year}-${month}-${newDay}`]) setSummaryActivity(mockData[`${year}-${month}-${newDay}`]['activities'])
    else {setSummaryActivity([])}

    if(mockData[`${year}-${month}-${newDay}`]) setSummaryGrateful(mockData[`${year}-${month}-${newDay}`]['grateful'])
    else {setSummaryGrateful([])}

    if(mockData[`${year}-${month}-${newDay}`]) setSummaryWorries(mockData[`${year}-${month}-${newDay}`]['worries'])
    else {setSummaryWorries([])}
  }

  const nextDayMap = {
    'Monday':'Tuesday',
    'Tuesday':'Wednesday',
    'Wednesday':'Thursday',
    'Thursday':'Friday',
    'Friday':'Saturday',
    'Saturday':'Sunday',
    'Sunday':'Monday'
  }

  const previousDayMap = {
    'Monday':'Sunday',
    'Tuesday':'Monday',
    'Wednesday':'Tuesday',
    'Thursday':'Wednesday',
    'Friday':'Thursday',
    'Saturday':'Friday',
    'Sunday':'Saturday'
  }

  switch(screen) {
    case 'home': 
    return(
      <Homescreen switchScreensHandler={switchScreenHandler} currentDay={day} dayName={dayName} setDay={setDayHandler} 
      summaryGrateful={summaryGrateful} summaryWorries={summaryWorries} 
      summaryMood={summaryMood} summaryActivity={summaryActivity}/>
    )
    break;
    case 'entry':
      return (
        <Entries switchScreensHandler={switchScreenHandler} moods={moodToday} activateMood={activateMood} currentDay={day} dayName={dayName}/>
      )
      break;
  }
}

export default App;
