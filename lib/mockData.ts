import {type IMock} from '@/lib/types/mockInterface'
import { IWorkingData } from './types/workingDataInterface';

const mockData: Array<IMock> = [
  {
    id: 314225,
    img: "/homes/kedroviy.jpeg",
    raiting: 4.9,
    location: 'Алтай',
    title: 'Кедровый приют',
    guestsMax: 4,
    bedrooms: 2,
    bathrooms: 2,
    price: 12400
  },
  {
    id: 313025,
    img: "/homes/foggy-side.jpeg",
    raiting: 4.8,
    location: 'Карелия',
    title: 'Туманный берег',
    guestsMax: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 16800
  },
  {
    id: 494225,
    img: "/homes/quite.jpeg",
    raiting: 5,
    location: 'Ленинградская область',
    title: 'Дом у тихого озера',
    guestsMax: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 8900
  },
  {
    id: 494525,
    img: "/homes/north.jpeg",
    raiting: 4.7,
    location: 'Кавказ',
    title: 'Северный склон',
    guestsMax: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 21900
  },
    {
    id: 494525,
    img: "/homes/north.jpeg",
    raiting: 4.7,
    location: 'Кавказ',
    title: 'Северный склон',
    guestsMax: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 21900
  }
]

const workingData: Array<IWorkingData> = [
  {
    title: "Выберите дом",
    description: "Сравните расположение, удобства, вместимость и отзывы реальных гостей."
  },
  {
    title: "Проверьте даты",
    description: "Календарь учитывает подтверждённые брони и даты, закрытые владельцем."
  },
  {
    title: "Забронируйте",
    description: "Сразу увидите стоимость проживания, уборки и итоговую сумму."
  },
  {
    title: "Отправляйтесь",
    description: "После подтверждения контакты и детали поездки появятся в профиле."
  }
]

export {mockData, workingData}