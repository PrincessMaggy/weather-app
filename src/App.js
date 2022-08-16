import './App.css';
import axios from 'axios';
import React,{useEffect, useState} from 'react';


function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  useEffect(()=>{
   axios.get("http://api.weatherapi.com/v1/current.json?key=44d4692372204a37ab8140704221608&q=London")
    .then((data) =>{
      setWeather(data.data);
    })
    .catch((err)=> console.log(err));
  },[]);
const weatherInput =(e) =>{
  setInput(e.target.value);
}
const searchWeather=()=>{
  axios.get(`http://api.weatherapi.com/v1/current.json?key=44d4692372204a37ab8140704221608&q=${input}`)
  .then(data =>{
    setWeather(data.data);
  })  
}

 return (
    <div className="App">
      {weather && (
        <div>
          <div className='search'>
            <input type="text" onChange={weatherInput} />
            <button onClick={searchWeather}>SEARCH</button>
          </div>
          <div className='weatherInfo'>
            <h1>{weather.location.country}</h1>
            <h2>{weather.location.region}</h2>
            <div className='condition'>
              <h3>{weather.current.condition.text}</h3>
              <img  src={weather.current.condition.icon} alt="icon"/>
              <h3>{weather.current.temp_c}deg Celsius</h3>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
