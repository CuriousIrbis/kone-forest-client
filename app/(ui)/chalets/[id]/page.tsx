'use client'

import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ChaletId({params}: PageProps){
    const {id} = use(params)
    return (
        <div>
            chalet id: {id}
        </div>
    )
}