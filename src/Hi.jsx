import { useState } from 'react';
import axios from 'axios';

function Hi() {
  let [cityName, setCityName] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  let submitHandler = (e) => {
    e.preventDefault();

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=560dc8bfa2794a7872a2c953177e7dd9`)
      .then(function (response) {
        // handle success
        console.log(response.data.main.temp);
        setWeatherData(response.data.main.temp);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    
    <div className='country-info'>
      <h2>Enter your city name to know temperature</h2>
      <form onSubmit={submitHandler}>
        <input
        placeholder='Enter city Name'
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setCityName(e.target.value);
          }}
        />
        <button className='btn' type="submit">Submit</button>
      </form>
      {weatherData !== null && <h2>Your city temperature is {weatherData} °C</h2>}
    </div>
  );
}

export default Hi;
