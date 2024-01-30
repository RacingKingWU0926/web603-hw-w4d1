import { useState, useEffect } from "react";

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow, faTemperatureHigh, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
    <div className="App">
      <header>
        <h2>React Weather App</h2>
        <div className="container">
          {/* section 1: form */}
          <div className="mt-3 d-flex flex-column justify-content-center align-items-center">

            {/* input text box label */}
            <div class="col-auto">
              <label for="location-name" class="col-form-label">
                Enter Location :
              </label>
            </div>

            {/* input text box and search button */}
            <div class="col-auto">
              <input
                type="text"
                id="location-name"
                class="form-control"
                onChange={inputHandler}
                value={getState}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={submitHandler}
              >
                Search
              </button>
            </div>
          </div>

          {/* section 2: weather information */}
          <div className="card mt-3 mx-auto">
            {/* if data comes from Open Weather Map based on input location */}
            {apiData.main
            /* load data if true */
            ? (
                <div class="card-body text-center">
                  <img
                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                  />
                  <p className="h2">{kelvinToFarenheit(apiData.main.temp)}&deg; F</p>
                  <p className="h5">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="fas fa-1x mr-2 text-dark"
                    />{" "}
                    <strong>{apiData.name}</strong>
                  </p>
                  <div className="row mt-4">

                    {/* left: low temp and high temp */}
                    <div className="col-md-6">
                      <p>
                        <FontAwesomeIcon
                          icon={faTemperatureLow}
                          className="fas fa-1x mr-2 text-primary"
                        />{" "}
                        <strong>{kelvinToFarenheit(apiData.main.temp_min)}&deg; F</strong>
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faTemperatureHigh}
                          className="fas fa-1x mr-2 text-danger"
                        />{" "}
                        <strong>{kelvinToFarenheit(apiData.main.temp_max)}&deg; F</strong>
                      </p>
                    </div>

                    {/* right: current weather */}
                    <div className="col-md-6">
                      <p>
                        {" "}
                        <strong>{apiData.weather[0].main}</strong>
                      </p>
                      <p>
                        <strong>
                          {" "}
                          {countries.getName(apiData.sys.country, "en", {
                            select: "official",
                          })}
                        </strong>
                      </p>
                    </div>

                  </div>
                </div>
              )
            /* output message if false */
            : (<h1>Loading...</h1>)
            }
          </div>

        </div>
        <footer className="footer">
          &copy; React Weather App
        </footer>
      </header>
    </div>
  )
}

export default App;
