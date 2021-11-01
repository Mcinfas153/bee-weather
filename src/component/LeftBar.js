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


    return (
        <div className="font-poppins">
            <div className="mb-5">
                <div className="flex justify-center md:justify-start">
                    <img src={icon} width={40} alt="weather icon" className="" />
                </div>
                <p className="text-white font-black text-xl text-center md:text-left">{climate}</p>
                <p className="text-white text-sm text-center md:text-left">{city?.name}, {city?.sys?.country}</p>
            </div>
            <div className="">
                <p className="text-white font-black text-3xl text-center md:text-left">{Math.round(main?.temp)}<span className="font-black">&#8451;</span></p>
                <p href="" className="text-white text-sm cursor-pointer text-center md:text-left">Change Location</p>
            </div>
        </div>
    )
}
