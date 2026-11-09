import {type IMock} from './mockInterface'

interface IChaletStore{
  chalets: Array<IMock>
  checkIn: string
  checkOut: string
  setChaletCheckIn: (newDate: string) => void
  setChaletCheckOut: (newDate: string) => void
  getRating: () => number
}

export {type IChaletStore}