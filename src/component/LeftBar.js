import React from 'react'
import { useState, useEffect } from 'react'

export default function LeftBar(props) {

    const { city } = props
    const { weather, main } = city
    const [icon, setIcon] = useState('https://i.gifer.com/ZZ5H.gif')
    const [climate, setClimate] = useState('Analyzing...')

    useEffect(() => {
        if (weather !== undefined) {
            setIcon(`http://openweathermap.org/img/wn/${weather[0].icon}.png`)
            setClimate(weather[0].main)
        }
    }, [weather])

    function comingSoon() {
        alert("This feature is under development. Coming Soon.");
    }


    return (
        <div className="font-poppins">
            <div className="my-6">
                <div className="flex justify-center md:justify-start">
                    <img src={icon} width={40} alt="weather icon" />
                </div>
                <p className="text-white font-bold text-xl text-center md:text-left">{climate}</p>
                <p className="text-white text-sm text-center md:text-left">{city?.name}, {city?.sys?.country}</p>
            </div>
            <div className="">
                <p className="text-white font-bold text-3xl text-center md:text-left mb-1">{Math.round(main?.temp)} <sup>o</sup>C</p>
                <a href="#" className="text-white text-sm cursor-pointer text-center" onClick={comingSoon}>Change Location</a>
            </div>
        </div>
    )
}
