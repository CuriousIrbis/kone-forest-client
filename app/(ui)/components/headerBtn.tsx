'use client'

import React from "react";

interface IHeader {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
}

export default function HeaderBtn({setIsOpen, isOpen}: IHeader){
    return (
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1 select-none [webkit-tap-highlight-color:transparent] cursor-pointer z-20 md:hidden"
        >
            <span className="w-5 h-0.5 bg-current block rounded pointer-events-none" />
            <span className="w-5 h-0.5 bg-current block rounded pointer-events-none" />
            <span className="w-5 h-0.5 bg-current block rounded pointer-events-none" />
        </button>
    )
}