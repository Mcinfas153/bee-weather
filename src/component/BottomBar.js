import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import WeatherInfoBox from './WeatherInfoBox'
import axios from '../axios'
import keys from '../config/appKeys'
import { getCurrentTime } from '../common/util'

export default function BottomBar() {

    const [hours, setHours] = useState([])

    async function fetchDailyWeather(lat, lon) {
        const response = await axios.get(`/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,daily,alerts}&appid=${keys.OPENWEATHER_KEY}&units=metric`)
        if (response.status === 200) {
            setHours(response?.data?.hourly)
        }
    }

    function fetchLocation() {
        navigator.geolocation.getCurrentPosition(async function (position) {
            fetchDailyWeather(position.coords.latitude, position.coords.longitude)
        })
    }

    useEffect(() => {
        fetchLocation()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mx-auto absolute bottom-10">
            {
                hours.map((hour, index) =>
                    (index > new Date().getHours() && index < new Date().getHours() + 7) &&
                    <>
                        < WeatherInfoBox className="bg-gray-100" time={index + 1} weather={Math.round(hour?.temp)} feelWeather={Math.round(hour?.feels_like)} />
                    </>
                )
            }
        </div>
    )
}
