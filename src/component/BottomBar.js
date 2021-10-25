import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import WeatherInfoBox from './WeatherInfoBox'
import axios from '../axios'
import keys from '../config/appKeys'
import { unixToHumanTime, checkTimeExetnsion } from '../common/util'

export default function BottomBar() {

    const [hours, setHours] = useState([])

    useEffect(() => {
        async function fetchDailyWeather(lat, lon) {
            const response = await axios.get(`/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,daily,alerts}&appid=${keys.OPENWEATHER_KEY}&units=metric`)
            if (response.status === 200) {
                //console.log(response?.data?.hourly)
                let hours = response?.data?.hourly
                hours = hours.slice(0, 6)
                setHours(hours)
            }
        }

        function fetchLocation() {
            navigator.geolocation.getCurrentPosition(async function (position) {
                fetchDailyWeather(position.coords.latitude, position.coords.longitude)
            })
        }

        fetchLocation()
    }, [])

    return (
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 mx-auto absolute bottom-10 px-3">
            {
                hours.map((hour, index) =>
                    (unixToHumanTime(hour?.dt) >= new Date().getHours() && unixToHumanTime(hour?.dt) <= new Date().getHours() + 5) &&
                    <>
                        < WeatherInfoBox key={hour?.dt} className="bg-gray-100" time={unixToHumanTime(hour?.dt) + ' ' + checkTimeExetnsion(unixToHumanTime(hour?.dt))} weather={Math.round(hour?.temp)} feelWeather={Math.round(hour?.feels_like)} />
                    </>
                )
            }
        </div>
    )
}
