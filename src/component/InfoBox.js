import React from 'react'

export default function InfoBox(props) {
    const { name } = props
    const { value } = props

    return (
        <div className="infoBox">
            <div className="flex items-center">
                <img src="https://img.icons8.com/metro/35/ffffff/humidity.png" className="mr-3"/>
                <div className="mt-5">
                    <p className="text-sm text-white font-semibold">{name}</p>
                    <p className="text-lg text-white font-bold">{value}</p>
                </div>
            </div>
        </div>
    )
}
