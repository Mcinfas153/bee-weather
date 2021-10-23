import { useEffect, useState } from 'react';
import './App.css';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import axios from './axios'

function App() {

  const [city, setCity] = useState([])

  async function fetchCity(latitude, longitude) {
    const response = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=cc1c4dad5fb0620d11eabe5d13b91bd8&units=metric`)
    console.log(response)
    if (response.status === 200) {
      setCity(response.data)
    }
  }

  function fetchWeather() {
    navigator.geolocation.getCurrentPosition(async function (position) {
      fetchCity(position.coords.latitude, position.coords.longitude)
    })
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div className="App h-screen bg-cover bg-center bg-app-background">
      <div className="grid grid-cols-5 gap-5">
        <div className="px-10 py-5">
          <LeftBar city={city} />
        </div>
        <div className="col-span-3">

        </div>
        <div className="px-10 py-5">
          <RightBar weather={city.main} wind={city.wind} />
        </div>
      </div>
      <div className="grid grid-cols-full">
        {/* <BottomBar /> */}
      </div>
    </div>
  );
}

export default App;
