import React from 'react'

export default function LeftBar() {
    return (
        <div>
            <div className="mb-5">
                <img src="https://img.icons8.com/office/40/000000/cloud-lighting--v1.png" />
                <p className="text-white font-extrabold text-xl">Fog</p>
                <p className="text-white text-sm">Dubai, UAE</p>
            </div>
            <div className="">
                <p className="text-white font-black text-3xl">28<span className="font-black">&#8451;</span></p>
                <a className="text-white text-sm">Change Location</a>
            </div>
        </div>
    )
}
