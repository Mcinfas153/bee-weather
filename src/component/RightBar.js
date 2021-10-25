import React from 'react'
import InfoBox from './InfoBox';

export default function RightBar(props) {

    const { weather, wind } = props

    return (
        <div className="flex flex-wrap md:flex-col justify-center">
            <InfoBox key="1" name="Humidity" value={`${weather?.humidity}%`} />
            <InfoBox key="2" name="Air Pressure" value={`${weather?.pressure} PS`} />
            <InfoBox key="3" name="Feels Like" value={`${Math.round(weather?.feels_like)}°C`} />
            <InfoBox key="4" name="Wind Speed" value={`${Math.round(wind?.speed)}KM/H`} />
        </div>
    )
}
