import React from 'react'
import InfoBox from './InfoBox';

export default function RightBar() {
    return (
        <div className="flex flex-col">
            <InfoBox name="Humidity" value="50%" />
            <InfoBox name="Air Pressure" value="1009.489.PS" />
            <InfoBox name="Chance of Rain" value="0%" />
            <InfoBox name="Wind Speed" value="1.4 KM/H" />
        </div>
    )
}
