import { IAmenities } from "./amenities";

interface IChalet{
  id?: number
  title: string
  description: string
  address: string
  price: number
  rating: number
  guestsMax: number
  bedrooms: number
  bathrooms: number
  is_active: boolean
  amenities: Array<IAmenities> | null
  image_url: string
}

export {type IChalet}