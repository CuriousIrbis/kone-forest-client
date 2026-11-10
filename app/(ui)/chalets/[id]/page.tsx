'use client'

import { Suspense, use } from "react";
import {IPageProps} from '@/lib/types/pathPropsInterface'

function ChaletContent({params}: IPageProps){
    const {id} = use(params)
    return (
        <div>
            chalet id: {id}
        </div>
    )
}

export default function ChaletId({params}: IPageProps){
    return (
        <Suspense fallback={<div>Загрузка информации о шале...</div>}>
            <ChaletContent params={params}/>
        </Suspense>
    )
}