export type TServices = {
  id: number;
  name: string;
  logo: string;
  description?: string;
  cashback: number;
  min_tariff_price: number;
}

export type TSubscriptions = {
  id: number;
  name: string;
  logo: string;
  price: string;
  cashback: string;
  is_active: boolean;
  is_direct: false;
  end_date: string;
  cashback_rub: number;
}

export type TTariff = {
  id: number;
  logo: string;
  name: string;
  description: string;
  period: string;
  price: string;
  test_period: string;
  test_price: string;
  cashback: string;
  cashback_conditions: string;
  month_price: number;
}

export type TTariffList = {
  id: number;
  name: string;
  logo: string;
  description: string;
  tariffs: TTariff[];
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

export type TPromocode = {
  id: number,
  user: number,
  tariff: string,
  start_date: string,
  end_date: string,
  auto_renewal: boolean,
  is_direct: boolean,
  promo_code: string,
  promo_code_period: string,
}
