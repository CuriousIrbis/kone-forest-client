'use client'

import { usePathname } from "next/navigation";

export default function ChaletId(){
    const id = usePathname()
    return (
        <div>
            chalet id: {id}
        </div>
    )
}