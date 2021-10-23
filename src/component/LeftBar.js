import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

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
                <img src={icon} width={40} />
                <p className="text-white font-black text-xl">{climate}</p>
                <p className="text-white text-sm">{city?.name}, {city?.sys?.country}</p>
            </div>
            <div className="">
                <p className="text-white font-black text-3xl">{Math.round(main?.temp)}<span className="font-black">&#8451;</span></p>
                <a className="text-white text-sm cursor-pointer">Change Location</a>
            </div>
        </div>
    )
}
