import { useState, useEffect } from "react";
import "./App.css"
import countries from "i18n-iso-countries"

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function App() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Irvine, USA");
  const [state, setState] = useState("Irvine, USA");

  // API key and URL
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
  }, [apiUrl]);

  // handle input field
  const inputHandler = (event) => {
    setGetState(event.target.value);
  }

  // copy the state from getState to state. 
  const submitHandler = () => {
    setState(getState);
  }

  // convert temperature in Kelvin to that in Farenheit
  const kelvinToFarenheit = (k) => {
    return ((k - 273.15) * 1.8 + 32).toFixed(0);
  }

  return (
    {/* add return */}
  )
}

export default App;
