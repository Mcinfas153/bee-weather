import React from 'react'
import WeatherInfoBox from './WeatherInfoBox'

export default function BottomBar() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 pt-40 mx-auto">
            <WeatherInfoBox className="bg-gray-100" time="3" weather="48" feelWeather="30"/>
            <WeatherInfoBox className="" time="4" weather="36" feelWeather="28"/>
            <WeatherInfoBox className="" time="5" weather="32" feelWeather="25"/>
            <WeatherInfoBox className="" time="6" weather="28" feelWeather="22"/>
            <WeatherInfoBox className="" time="7" weather="24" feelWeather="20"/>
            <WeatherInfoBox className="" time="8" weather="18" feelWeather="18"/>
        </div>
    )
}
