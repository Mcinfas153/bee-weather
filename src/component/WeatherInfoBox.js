import React from 'react'

export default function WeatherInfoBox(props) {
    const { time,weather,feelWeather } = props
    return (
        <div className="transition duration-500 ease-in-out hover:bg-gray-100 hover:bg-opacity-25 transform hover:-translate-y-1 hover:scale-110 cursor-pointer rounded p-5">
            <div>
                <div className="cityTime">
                    <p className="text-white text-xl font-normal">{time} PM</p>
                </div>
                <div className="cityWeather mt-8">
                    <p className="text-white font-bold text-4xl mb-1">{weather} <sup>o</sup>C</p>
                    <p className="text-white font-semibold">Feels like {feelWeather} <sup>o</sup>C</p>
                </div> 
            </div>
        </div>
    )
}
