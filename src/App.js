import { useEffect, useState } from 'react';
import './App.css';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import axios from './axios'

function App() {

  const [city, setCity] = useState([])
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  async function fetchCity() {
    const response = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=cc1c4dad5fb0620d11eabe5d13b91bd8&units=metric`)
    if (response.status === 200) {
      setCity(response.data)
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  }, [])

  useEffect(() => {

    fetchCity()

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
