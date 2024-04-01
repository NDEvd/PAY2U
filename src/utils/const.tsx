import { TServices, TSubscriptions, TTariff} from './types';
import logo from '../images/image 23001.svg';

export const servicies: TServices[] = [
  {
    id: 1,
    name: 'Яндекс Практикум',
    logo: logo,
    price: 200,
    cashBack: 5,
  },
  {
    id: 2,
    name: 'Иви',
    logo: logo,
    price: 290,
    cashBack: 7,
  },
  {
    id: 3,
    name: 'Megogo',
    logo: logo,
    price: 1,
    cashBack: 10,
  }
]

export const subscription: TSubscriptions[] = [
  {
    id: 11,
    name: 'Test 1',
    logo: logo,
    price: 200,
    cashBack: 5,
    isActive: true,
    isDirect: false,
  },
  {
    id: 12,
    name: 'Test 2',
    logo: logo,
    price: 290,
    cashBack: 5,
    isActive: true,
    isDirect: true,
  },
  {
    id: 13,
    name: 'Test 3',
    logo: logo,
    price: 1,
    cashBack: 10,
    isActive: true,
    isDirect: true,
  }
]

export const tariffsTest: TTariff[] = [
      {
        id: 111,
        logo: logo,
        name: 'Изи Иви на 1 месяц',
        description: 'Доступ к каталогу лучших фильмов, сериалов и мультфильмов.',
        period: 90,
        price: 599,
        monthPrice: 200,
        testPeriod: 30,
        testPrice: 1,
        cashBack: 7,
      },
      {
        id: 112,
        logo: logo,
        name: 'Подписка на 1 месяц',
        description: 'Доступ к каталогу лучших фильмов, сериалов и мультфильмов.',
        period: 30,
        price: 399,
        monthPrice: 150,
        testPeriod: 30,
        testPrice: 1,
        cashBack: 10,
      }
]

export const tariffTest: TTariff = 
  {
    id: 111,
    logo: logo,
    name: 'Изи Иви на 1 месяц',
    description: 'Доступ к каталогу лучших фильмов, сериалов и мультфильмов.',
    period: 90,
    price: 599,
    monthPrice: 200,
    testPeriod: 30,
    testPrice: 1,
    cashBack: 7,
  }
