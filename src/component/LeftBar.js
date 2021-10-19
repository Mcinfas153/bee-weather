import React from 'react'

export default function LeftBar(props) {

    const { city } = props
    const { weather, main } = city

    return (
        <div className="font-poppins">
            <div className="mb-5">
                <img src="https://img.icons8.com/office/40/000000/cloud-lighting--v1.png" />
                <p className="text-white font-black text-xl">{weather[0].main}</p>
                <p className="text-white text-sm">{city.name}, {city.sys.country}</p>
            </div>
            <div className="">
                <p className="text-white font-black text-3xl">{Math.round(main.temp)}<span className="font-black">&#8451;</span></p>
                <a className="text-white text-sm cursor-pointer">Change Location</a>
            </div>
        </div>
    )
}
