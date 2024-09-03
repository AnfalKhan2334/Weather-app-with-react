import { useState } from 'react';
import axios from 'axios';

function Bye() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    axios.get(apiUrl)
      .then((response) => {
        const data = response.data[0];
        const countryInfo = {
          name: data.name.common,
          flag: data.flags.png,
          population: data.population,
          currency: Object.values(data.currencies)[0].name,
          language: Object.values(data.languages)[0,1],
        };
        setCountryData(countryInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='country-info'>
      <h2>Enter any Country name </h2>
      <form onSubmit={submitHandler}>
        <input
        placeholder='Enter country name'
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setCountryName(e.target.value);
          }}
        />
        <button className='btn' type="submit">Submit</button>
      </form>
      {countryData && (
        <div>
          <h2>Country Information:</h2>
          <img src={countryData.flag} alt="Country flag" />
          <p>Country Name: {countryData.name}</p>
          <p>Population: {countryData.population}</p>
          <p>Currency: {countryData.currency}</p>
          <p>Language: {countryData.language}</p>
        </div>
      )}
    </div>
  );
}

export default Bye;
