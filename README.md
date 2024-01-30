# web603-hw-w4d1

## Getting Started

### Step 1: Create App and Install Dependencies

Create a React application named `react-weather-app` by
```bash
$ npx create-react-app react-weather-app
```

Install the following dependencies:

- `i18n-iso-countries`
```bash
$ npm install i18n-iso-countries
```

and then Bootstrap:
```bash
$ npm install bootstrap
```

and then Font Awesome:
```bash
$ npm npm i --save @fortawesome/fontawesome-svg-core
$ npm install --save @fortawesome/free-solid-svg-icons
$ npm install --save @fortawesome/react-fontawesome
```

### Step 2: Get the API Key from Open Weather Map

Sign in or create an account at https://openweathermap.org/.

Then grab the API key at https://home.openweathermap.org/api_keys

In the project root, create a `.env` file and paste the API key as
```
REACT_APP_API_KEY=<paste your key>
```

Next, grab the URL to connect to the Open Weather Map API. As of January 2024, the latest version of Open Weather Map is 3.0, and documentation is available at https://openweathermap.org/api/one-call-3.

However, the project will **get weather by city name and country code**. The corresponding API found is as follows:
```
https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
```
at https://openweathermap.org/current (look for "Built-in API request by city name").
