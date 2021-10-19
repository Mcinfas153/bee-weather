import React from 'react'
import InfoBox from './InfoBox';

export default function RightBar() {
    return (
        <div className="rightBar grid grid-cols-1 gap-1 justify-items-start px-10 sm:pl-20 md:pl-40 lg:pl-80 py-40 mx-auto">
            <InfoBox name="Humidity" value="50%"/>
            <InfoBox name="Air Pressure" value="1009.489.PS"/>
            <InfoBox name="Chance of Rain" value="0%"/>
            <InfoBox name="Wind Speed" value="1.4 KM/H"/>
        </div>
    )
}
