import {type IChalet} from './chaletInterface'

interface IChaletStore{
  chalets: Array<IChalet>
  isLoading: boolean
  error: string | null
  checkIn: string
  checkOut: string
  setChaletCheckIn: (newDate: string) => void
  setChaletCheckOut: (newDate: string) => void
  getRating: () => number
  getChalets: () => Promise<void>
}

export {type IChaletStore}