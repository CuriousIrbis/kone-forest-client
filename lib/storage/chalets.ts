import {type IChaletStore} from '@/lib/types/chaletStoreInterface'
import { create } from 'zustand';
import getChalets from '@/lib/api/getChalets'

const useChaletStore = create<IChaletStore>()((set, get) => ({
    chalets: [],
    checkIn: "",
    isLoading: false,
    error: null,
    checkOut: "",
    setChaletCheckIn: (newDate) => set({checkIn: newDate}),
    setChaletCheckOut: (newDate) => set({checkOut: newDate}),
    getRating: () => {
        return get().chalets.reduce((total, chalet) => total + chalet.rating, 0)
    },

    getChalets: async () => {
        set({isLoading: true, error: null})
        
        try{
            const data = await getChalets()

            set({chalets: data?.chalet || [], isLoading: false})
        } catch (err: unknown){
            if(err instanceof Error)
                set({error: err.message, isLoading: false})
            else
                set({error: 'Произошла неизвестная ошибка', isLoading: false})
        }
    }
}))

export {useChaletStore}