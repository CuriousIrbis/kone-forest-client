import {type IChaletStore} from '@/lib/types/chaletStoreInterface'
import { create } from 'zustand';
import {mockData} from '@/lib/mockData'

const useChaletStore = create<IChaletStore>()((set, get) => ({
    chalets: mockData,
    checkIn: "",
    checkOut: "",
    setChaletCheckIn: (newDate) => set({checkIn: newDate}),
    setChaletCheckOut: (newDate) => set({checkOut: newDate}),
    getRating: () => {
        return get().chalets.reduce((total, chalet) => total + chalet.raiting, 0)
    }
}))

export {useChaletStore}