import { useEffect, useState } from 'react';
import './App.css';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import BottomBar from './component/BottomBar';
import axios from './axios'
import keys from './config/appKeys';

function App() {

  const [city, setCity] = useState([])

  useEffect(() => {
    async function fetchCity(latitude, longitude) {
      const response = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${keys.OPENWEATHER_KEY}&units=metric`)
      //console.log(response)
      if (response.status === 200) {
        setCity(response.data)
      }
    }

    function fetchWeather() {
      navigator.geolocation.getCurrentPosition(async function (position) {
        fetchCity(position.coords.latitude, position.coords.longitude)
      })
    }

    fetchWeather()
  }, [])

  return (
    <div className="App h-screen bg-cover bg-center bg-app-background">
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5 justify-items-center md:justify-items-start">
        <div className="px-10 py-5 md:col-span-1">
          <LeftBar city={city} />
        </div>
        <div className="col-span-3">

        </div>
        <div className="px-5 md:px-10 py-5 md:col-span-1 justify-items-center md:justify-items-start">
          <RightBar weather={city.main} wind={city.wind} />
        </div>
      </div>
      <div className="grid grid-cols-full">
        {<BottomBar />}
      </div>
    </div>
  );
}

export default App;
