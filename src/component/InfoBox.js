import React from 'react'

export default function InfoBox(props) {
    const { name, value, img } = props

    return (
        <div className="infoBox font-poppins bg-gray-50 bg-opacity-25 rounded px-8 py-3 mt-2 mr-1">
            <div className="flex justify-end items-start">
                <div className="">
                    <p className="text-xs text-white font-medium text-center md:text-end">{name}</p>
                    <p className="text-medium text-white font-semibold text-center md:text-end">{value}</p>
                </div>
                <img src={img} alt="icon" className="ml-1.5" />
            </div>
        </div>
    )
}
