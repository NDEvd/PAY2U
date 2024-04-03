export type TServices = {
  id: number;
  name: string;
  logo: string;
  minPrice: number;
  cashBack: number;
  description?: string;
}

export type TSubscriptions = {
  id: number;
  name: string;
  logo: string;
  price: number;
  cashBack: number;
  isActive: boolean;
  isDirect: boolean;
}

export type TTariff = {
  id?: number;
  logo: string;
  name: string;
  description: string;
  period: number;
  price: number;
  monthPrice: number;
  testPeriod: number;
  testPrice: number;
  cashBack: number;
}

export type TFormField = {
  name: string;
  phone: string;
  pay: string;
  extension: true;
  rulesOne: boolean;
  rulesTwo: boolean;
}

export type TUser = {
  id: number;
  name: string;
  phone: string;
}
