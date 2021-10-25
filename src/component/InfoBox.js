import React from 'react'

export default function InfoBox(props) {
    const { name, value } = props

    return (
        <div className="infoBox font-poppins">
            <div className="flex items-center p-3 md:p-2 justify-items-end">
                <img src="https://img.icons8.com/metro/35/ffffff/humidity.png" alt="icon" className="mr-3" />
                <div className="">
                    <p className="text-xs text-white font-medium text-center md:text-left">{name}</p>
                    <p className="text-xl text-white font-black text-center md:text-left">{value}</p>
                </div>
            </div>
        </div>
    )
}
