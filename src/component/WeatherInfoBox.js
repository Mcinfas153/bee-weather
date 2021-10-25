import React from 'react'

export default function WeatherInfoBox(props) {

    const { time, weather, feelWeather } = props

    return (
        <div className="transition duration-500 ease-in-out hover:bg-gray-100 hover:bg-opacity-25 transform hover:-translate-y-1 hover:scale-110 cursor-pointer rounded px-3 py-1">
            <div>
                <div className="cityTime">
                    <p className="text-white text-md font-bold text-center">{time}</p>
                </div>
                <div className="cityWeather mt-1 md:mt-3">
                    <p className="text-white font-bold text-center text-2xl md:text-3xl mb-1">{weather} <sup>o</sup>C</p>
                    <p className="text-white text-xs text-center">Feels like {feelWeather} <sup>o</sup>C</p>
                </div>
            </div>
        </div>
    )
}
