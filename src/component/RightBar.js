import React from 'react'
import InfoBox from './InfoBox';

export default function RightBar(props) {

    const { weather, wind } = props

    return (
        <div className="flex flex-wrap md:flex-col justify-center">
            <InfoBox key="1" img='https://img.icons8.com/material-outlined/35/ffffff/humidity.png' name="Humidity" value={`${weather?.humidity}%`} />
            <InfoBox key="2" img='https://img.icons8.com/ios-glyphs/35/ffffff/pressure.png' name="Air Pressure" value={`${weather?.pressure} PS`} />
            <InfoBox key="3" img='https://img.icons8.com/fluency-systems-filled/35/ffffff/offer-hot-price.png' name="Feels Like" value={`${Math.round(weather?.feels_like)}°C`} />
            <InfoBox key="4" img='https://img.icons8.com/fluency-systems-regular/35/ffffff/wind-speed-less-1.png' name="Wind Speed" value={`${Math.round(wind?.speed)}KM/H`} />
        </div>
    )
}
