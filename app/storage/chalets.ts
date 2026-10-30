import {type IChaletStore} from '@/lib/types'
import { create } from 'zustand';
import {mockData} from '@/lib/mockData'

const useChaletStore = create<IChaletStore>()(() => ({
    chalets: mockData
}))

export {useChaletStore}