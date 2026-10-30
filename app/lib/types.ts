import { JSX } from "react";

interface IMock{
  img: string
  raiting: number
  location: string
  title: string
  guestsMax: number
  bedrooms: number
  bathrooms: number
  price: number
}

interface IFormDate{
  checkIn: string
  checkOut: string
}

interface IChaletStore{
  chalets: Array<IMock>
}

interface IOptions{
  title: string
  input: JSX.Element
}

export {type IMock, type IFormDate, type IChaletStore, type IOptions}