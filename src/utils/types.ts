export type TServices = {
  id?: number,
  name: string,
  logo: string,
  price: number,
  cashBack: string,
  fromServis?: boolean,
}

export type TSubscriptions = {
  id: 1,
  name: string,
  logo: string,
  price: number,
  cashback: number,
  is_active: boolean,
  is_direct: boolean,
}

export type TTariff = {
  id?: number,
  logo: string,
  name: string,
  description: string,
  period: number,
  price: number,
  monthPrice: number,
  testPeriod: number,
  testPrice: number,
  cashBack: number,
}

export type TServiceWithTariff = {
  id?: number,
  name?: string,
  logo: string,
  description: string,
  tariffs: TTariff[],
}

export type TFormField = {
  name: string,
  phone: string,
  pay: string,
  extension: true,
  rulesOne: boolean,
  rulesTwo: boolean,
}
