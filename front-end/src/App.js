import React, {useState} from 'react';
import './App.css';
import Homescreen from './Homescreen.js'
import Entries from './Entries';

let ws = null;

function App() {
  
  if(ws == null) ws = new WebSocket('ws://localhost:8081');

  let testMessage = {
    date: '31-05-2020',
    username: "Karl",
    type: "storeMoods",
    moods: ["happy"]
  }

  ws.onopen = () => {
    console.log('Websocket connected')
    sendText(JSON.stringify(testMessage))
  };

  ws.onmessage = message => {
    console.log('Message Received' + message)
  };
        
  function sendText(text) {
    ws.send(text);
  }
  
  


  // Contains data for each day
  let mockData = { '2020-5-29': {moods: ["happy", "excited", "curious", 'powerful'], activities: ["TV", "internet"], grateful:['My Family', 'My Friends', 'My Dog', 'My Health'], worries:['Coronavirus','Sickness', 'Money']},

 '2020-5-30': {moods: ["sad", "livid", 'gleeful'], activities: ["ate", "breakfast", 'lunch'], grateful:['Suitcases'], worries:['Macaroni monster']},

 '2020-5-31': {moods: [], activities: ["yoga", "meditation"], grateful:['Karl', 'Computer Science'], worries:['World War Three', 'Donald Trump']},

 '2020-5-28': {moods: ['amused', 'calm', 'cheerful', 'powerful'], activities: ['camping', 'surfing'], grateful:['My Pet', 'My Morning Coffee'], worries:['Coronavirus','Sickness', 'Money']},

 '2020-5-27': {moods: ['happy', 'content', 'good', 'mellow'], activities: ['yoga', 'biking'], grateful:['Netflix', 'The Weather'], worries:['Money']},

 '2020-5-26': {moods: ['silly', 'peaceful', 'curious', 'joyful'], activities: ['picnic', 'swim'], grateful:['My Family', 'My Friends'], worries:['Coronavirus','Crime']},

 '2020-5-25': {moods: ['angry', 'annoyed', 'apathetic', 'bad'], activities: ['shopping', 'spa'], grateful:['My Holidays', 'Puppy Videos', 'My Dog', 'My Health'], worries:['Safety','Relationships', 'Rent']},

 '2020-5-24': {moods: ['cranky', 'depressed', 'envious', 'frustrated'], activities: ['sleep in', 'haircut'], grateful:['Suits', 'Fashion'], worries:['Exercise','Chores']},

 '2020-5-23': {moods: ['gloomy', 'guilty', 'grumpy', 'irritated'], activities: ['TV', 'TikTok'], grateful:['Music', 'Animals', 'TikTok'], worries:['Work']},

 '2020-5-22': {moods: ['pessimistic', 'annoyed', 'sad', 'stressed'], activities: ['coffee', 'bar'], grateful:['Money', 'Sports'], worries:['Diet','Job Security']},

 '2020-5-21': {moods: ['anxious', 'rejected', 'indifferent', 'grumpy'], activities: ['cook', 'internet'], grateful:['Tennis', 'Soccer', 'My Dog', 'My Health'], worries:['Old Age','Death', 'Poverty']},

 '2020-5-20': {moods: ['giddy', 'optimistic', 'blissful', 'powerful'], activities: ['shopping', 'TV'], grateful:['Blankets', 'My Friends'], worries:['Fatigue','Appearance']},

 '2020-5-19': {moods: ['excited', 'silly', 'ecstatic', 'mellow'], activities: ['sleep in', 'bar'], grateful:['The Weekend', 'My Friends', 'My Cat'], worries:['Social Status', 'Debt']},

 '2020-5-18': {moods: ['happy', 'excited', 'silly', 'energetic'], activities: ['clean', 'read'], grateful:['My Siblings', 'Reading'], worries:['Coronavirus','Mental Health']},

 '2020-5-17': {moods: ['awesome', 'cool', 'popular', 'funny'], activities: ['read', 'volunteer'], grateful:['My Family', 'Alone Time'], worries:['Cookie Monster']}
}

  let switchScreenHandler = () => {
    if(screen == 'home') {
      setScreen('entry');
    }
    else {
      setScreen('home')
    }
  }


  let activateMood = (mood, index) => {
    let newMoods = moodToday
    console.log("JJSJSDJLDSJ")
    console.log('INDEX: ' + index) 
    console.log(newMoods[index]['activated'])
    if (newMoods[index]['activated']) {
      newMoods[index]['activated'] = false;
    }
    else {
      newMoods[index]['activated'] = true
    }

    let moodsList = []

    newMoods.forEach(mood => {
      if(mood['activated']) moodsList.push(mood['mood'])
    })

    mockData['2020-5-31']['moods'] = moodsList.slice();
    console.log('today moods: ' + mockData['2020-5-31']['moods'])
    
    if(day==31) {
      setSummaryMood(moodsList)
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
    {mood: 'happy', activated: false, index: 0},
    {mood: 'sad', activated: false, index: 1},
    {mood: 'anxious', activated: false, index: 2},
    {mood: 'lonely', activated: false, index: 3},
    {mood: 'add your own', activated: false, index: 4},
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
    
    if(mockData[`${year}-${month}-${newDay}`]) {
      console.log(mockData['2020-5-31'])
      setSummaryMood(mockData[`${year}-${month}-${newDay}`]['moods'])}
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
