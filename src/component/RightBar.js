import React from 'react'
import InfoBox from './InfoBox';

export default function RightBar(props) {

    const { weather, wind } = props

    return (
        <div className="flex flex-col">
            <InfoBox name="Humidity" value={`${weather?.humidity}%`} />
            <InfoBox name="Air Pressure" value={`${weather?.pressure} PS`} />
            <InfoBox name="Feels Like" value={`${Math.round(weather?.feels_like)}°C`} />
            <InfoBox name="Wind Speed" value={`${Math.round(wind?.speed)}KM/H`} />
        </div>
    )
}
