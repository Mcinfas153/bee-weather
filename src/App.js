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
    <div className="App bg-cover bg-center bg-app-background">
      <div className="md:flex md:justify-between md:items-baseline py-5 md:px-10 lg:px-20">
        <div className="mb-10">
          <LeftBar city={city} />
        </div>
        <div className="">
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
