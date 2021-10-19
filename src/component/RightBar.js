import React from 'react'
import InfoBox from './InfoBox';

export default function RightBar() {
    return (
        <div className="rightBar grid grid-cols-1 gap-0 justify-items-start pl-5 sm:pl-5 md:pl-20 xl:pl-80 py-10 mx-auto">
            <InfoBox name="Humidity" value="50%"/>
            <InfoBox name="Air Pressure" value="1009.489.PS"/>
            <InfoBox name="Chance of Rain" value="0%"/>
            <InfoBox name="Wind Speed" value="1.4 KM/H"/>
        </div>
    )
}
